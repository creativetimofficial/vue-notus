<template>
    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div class="rounded-t bg-white mb-0 px-6 py-6">
            <div class="text-center flex justify-between">
                <h6 class="text-blueGray-700 text-xl font-bold">Import</h6>
            </div>
        </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form>
                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    Service to import: <br />
                    <span class="inline-block ml-5 text-xs"> <a :href="this.DOMAIN + '/import/download-csv-template'">Download an example
                            csv file</a></span><br/>
                    <span class="inline-block ml-5 text-xs"> <a :href="this.DOMAIN + '/entries/export'">Download all data into
                    csv file</a></span>
                </h6>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-label">
                                Label
                            </label>
                            <select v-model="label" multiple id="grid-label"
                                class="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                                <option
                                    :class="'text-xs font-semibold justify-center py-1 px-2 uppercase rounded text-white-600 last:mr-0 mr-1 ' + item.color"
                                    v-for="item in input.tags" :key="item.id" :value="item.id">
                                    {{ item.name }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                    File import
                </h6>
                <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-4">
                        <div class="relative w-full mb-3">
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                                File
                            </label>
                            <input
                                class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                type="file" v-on:change="upload()" ref="file" name="file" id="file" accept=".csv" />
                        </div>
                    </div>
                </div>

                <div class="flex flex-wrap">
                    <div class="w-full lg:w-12/12 px-4">
                        <div class="relative w-full mb-3">
                            <button v-on:click="submit()"
                                class="w-full bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button">
                                IMPORT
                            </button>
                        </div>
                    </div>
                </div>

                <div class="text-white px-6 py-4 border-0 rounded relative mb-4 bg-red-500" v-if="this.action.alert">
                    <span class="text-xl inline-block mr-5 align-middle">
                        <i class="fas fa-bell"></i>
                    </span>
                    <span class="inline-block align-middle mr-8">
                        {{ this.action.alert_message }}
                    </span>
                    <button v-on:click="closeAlert()"
                        class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none">
                        <span>×</span>
                    </button>
                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />

            </form>
        </div>
    </div>
</template>
  
<script>
import ApiService from '../../services/ApiService.vue'

export default {
    data() {
        return {
            DOMAIN: process.env.VUE_APP_API_PATH,
            action: {
                alert: false,
                alert_message: null,
            },
            label: [],
            input: {
                tags: [],
                file: []
            }
        }
    },
    mounted() {
        this.getLabels()
    },
    methods: {
        upload() {
            for (var i = 0; i < this.$refs.file.files.length; i++) {
                let file = this.$refs.file.files[i];
                this.input.file[i] = file;
            }
        },
        closeAlert: function () {
            this.action.alert = false;
        },
        getLabels() {
            let _this = this

            ApiService.labels().then((res) => {
                let data = res.data
                data.forEach(function (r) {
                    _this.input.tags.push(r)
                })
            })

        },
        submit() {

            let data = {
                file: this.input.file[0],
                label: this.label,
            }

            let formData = new FormData()
            formData.append("file", data.file)
            formData.append("service", data.service)
            formData.append("label", data.label)

            ApiService.importData(formData).then(() => {
                this.input = {
                    service: null,
                    file: []
                }
            }).catch((error) => {
                this.action.alert = true
                this.action.alert_message = "Ops... An error occured"
                console.error(error);
            })
        },

        getAccount() {
            const _this = this
            ApiService.accounts().then((res) => {
                let data = res.data
                data.forEach(function (r) {
                    _this.accounts.push(r)
                })
            })
        },
    }
}
</script>
  