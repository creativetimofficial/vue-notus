<template>
    <div>
        <div class="block w-full overflow-x-auto">

            <div class="container px-4 mx-auto py-3 border border-solid border-blueGray-100 shadow" :class="[
                entry.planned
                    ? 'bg-blueGray-100'
                    : '',
                entry.payee
                    ? 'bg-blueGray-200'
                    : '',
                entry.transfer
                    ? 'transfer-color'
                    : ''
            ]" v-for="(entry, i) in entries" :key="i">
                <div class="flex flex-wrap">
                    <div class="flex-l w-full px-4">
                        <span class="text-xs block text-emerald-500 rounded ">{{ entry.date }}</span>
                    </div>
                </div>
                <div class="flex flex-wrap">
                    <div class="w-full px-4 flex-1">
                        <i v-on:click="getEntries('category=' + entry.category.id, null)"
                            :class="'block text-lightBlue-400 ' + entry.category.icon"> <span
                                class="px-2 text-blueGray-700 rounded ">
                                {{ entry.category.name }}</span></i>
                        <span class="text-xs block rounded"
                            :class="[entry.payee ? 'text-blueGray-900' : 'text-blueGray-400']">( {{ entry.account }} )
                            {{
                                entry.payee
                            }}</span>
                    </div>
                    <div class="w-full px-4 flex-1 text-right">
                        <span v-on:click="getEntries('type=' + entry.type_amount, null)"
                            class="text-sm block text-blueGray-700 rounded ">
                            {{ entry.amount }} <i :class="'fas fa-circle ' + entry.color_amount + ' mr-2'"></i>
                        </span>

                    </div>
                    <div class="flex-l">
                        <EntryActionDropdown :entryId="entry.id" :type="entry.type" />
                    </div>
                </div>

                <div class="flex flex-wrap">
                    <div class="flex-l w-full px-4">
                        <span class="text-xs block text-blueGray-700 rounded ">{{ entry.note }}</span>
                    </div>
                </div>

                <div class="flex flex-wrap">
                    <div class="w-full px-4 flex-1">
                        <span class="text-xs mt-2 block text-blueGray-700 rounded ">
                            <span v-on:click="getEntries('labels=' + label.id, null)" v-for="(label, i) in entry.labels"
                                :key="i"
                                class="text-xs font-semibold justify-center py-1 px-2 uppercase rounded text-white-600 last:mr-0 mr-1"
                                :style="'color: #fff; background-color: ' + label.color">{{
                                    label.name
                                }}</span>
                        </span>
                    </div>

                    <div class="w-full px-4 flex-1 text-right">
                        <span class="text-xs mt-2 block text-blueGray-700 rounded ">
                            <span v-if="entry.planned"
                                class="'text-xs font-semibold justify-center py-1 px-2 uppercase rounded text-white-600 last:mr-0 mr-1 bg-red-200">pianificato</span>
                        </span>
                    </div>

                </div>
            </div>

        </div>
        <!-- pagination -->
        <div class="py-2" v-if="pagination.enabled">
            <nav class="block">
                <ul class="flex pl-0 rounded list-none flex-wrap">
                    <li>
                        <a v-on:click="first(pagination.first_page_url)"
                            class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-emerald-500 text-white bg-emerald-500">
                            <i class="fas fa-chevron-left -ml-px"></i><i class="fas fa-chevron-left -ml-px"></i>
                        </a>
                    </li>
                    <li>
                        <a v-on:click="previus(pagination.previus)"
                            class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-emerald-500 text-white bg-emerald-500">
                            <i class="fas fa-chevron-left -ml-px"></i>
                        </a>
                    </li>
                    <li>
                        <a v-on:click="next(pagination.next)"
                            class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-emerald-500 text-white bg-emerald-500">
                            <i class="fas fa-chevron-right -mr-px"></i>
                        </a>
                    </li>
                    <li>
                        <a v-on:click="last(pagination.last_page_url)"
                            class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-emerald-500 text-white bg-emerald-500">
                            <i class="fas fa-chevron-right -mr-px"></i><i class="fas fa-chevron-right -mr-px"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <!-- end pagination -->
    </div>
</template>
<script>
import bootstrap from "@/assets/img/bootstrap.jpg";
import angular from "@/assets/img/angular.jpg";
import sketch from "@/assets/img/sketch.jpg";
import react from "@/assets/img/react.jpg";
import vue from "@/assets/img/react.jpg";
import EntryActionDropdown from "@/components/Dropdowns/EntryActionDropdown.vue";

import axios from 'axios'
import ApiService from '../../services/ApiService.vue';
// const X_API_KEY = { "X-API-KEY": "7221" }
const DOMAIN = process.env.VUE_APP_API_PATH

export default {
    data() {
        return {
            ENTRIES_ROUTE: "/api/entry/",
            vue,
            react,
            sketch,
            angular,
            bootstrap,
            entries: [],
            filter: "",
            planned: false,
            wallet: null,
            pagination: {
                enabled: true,
                previus: 1,
                next: 2,
                from: 1,
                last_page: 1,
                last_page_url: "",
                first_page_url: "",
                links: [],
                path: ""
            },
            selected: {
                account: 0
            },
            action: {
                reset: false
            },
            input: {
                tags: [],
                account: [],
            }
        };
    },
    components: {
        EntryActionDropdown
    },
    watch: {
        '$route.params.account_id': function (account_id) {
            this.selected.account = account_id === undefined ? this.selected.account : account_id
            this.getEntries('', null)
        },
        '$route.params.filter_type': function (filter_type) {
            this.getEntries('type=' + filter_type, null)
        },
        '$route.params.category_id': function (category_id) {
            this.getEntries('category=' + category_id, null)
        },
        '$route.params.label_id': function (label_id) {
            this.getEntries('label=' + label_id, null)
        }
    },
    mounted() {
        let filter = ''
        let category_id = this.$route.params.category_id
        let label_id = this.$route.params.label_id
        if (category_id != undefined) {
            filter = 'category=' + category_id
        }
        if (label_id != undefined) {
            filter = 'label=' + label_id
        }
        this.getEntries(filter, null)
    },
    methods: {
        fixWallet() {

            let data = {
                amount: this.wallet,
                account_id: this.selected.account
            }


            axios.post(DOMAIN + "/api/stats/wallet", data).then((resp) => {
                //TODO: inserire un messaggio
                console.log(resp)
            }).catch((error) => {
                this.action.alert = true
                this.action.alert_message = "Ops... An error occured"
                console.error(error);
            })
        },
        getAccount() {
            let _this = this

            ApiService.accounts().then((res) => {
                let data = res.data
                data.forEach(function (r) {
                    _this.input.account.push(r)
                })
            })
        },
        buildEntriesTable(res) {
            this.entries = []

            let data = res

            if (this.pagination.enabled === true) {
                this.pagination.links = []

                let links = res.links

                this.pagination.from = res.from
                this.pagination.last_page = res.last_page
                this.pagination.last_page_url = res.last_page_url
                this.pagination.first_page_url = res.first_page_url
                this.pagination.path = res.path

                links.forEach((item) => {
                    this.pagination.links.push(item)
                });

                data = res.data

            }

            let _this = this
            if (data.length < 0) {
                data.elements.forEach(function (r) {

                    let labels = []
                    r.label.forEach((l) => {
                        if (l.name != "") {
                            labels.push(
                                {
                                    id: l.id,
                                    name: l.name,
                                    color: l.color
                                }
                            )
                        }
                    });

                    let info = {
                        id: r.id,
                        date: r.date_time,
                        amount: parseFloat(r.amount).toFixed(2) + " €",
                        color_amount: r.amount <= 0 ? "text-red-500" : "text-emerald-500",
                        type_amount: r.amount <= 0 ? "expenses" : "incoming",
                        account: r.account.name,
                        note: r.note,
                        planned: r.planned == 0 ? false : true,
                        category: {
                            name: r.sub_category.name,
                            id: r.sub_category.id,
                            icon: r.sub_category.category.icon
                        },
                        labels: labels,
                        payee: null,
                        transfer: r.transfer == 0 ? false : true,
                        type: r.type
                    }

                    if (r.transfer_to != null) {
                        info.account = r.account.name + " <-> " + r.transfer_to.name
                    }

                    if (r.payee != null) {
                        info.payee = "[ debit: " + r.payee.name + "]"
                    }

                    _this.entries.push(info)
                })
            }

        },
        getEntries(filter, path) {
            let _this = this

            if (filter != "") {
                _this.filter = _this.filter + "&" + filter
            }

            if (filter != '') {
                this.action.reset = true
            } else {
                this.action.reset = false
            }

            if (path == null) {
                ApiService.getEntry().then((res) => {
                    _this.buildEntriesTable(res.data)
                })
            }

            if (this.$route.params.account_id != 0) {
                ApiService.getEntryFromAccount(this.$route.params.account_id).then((res) => {
                    _this.buildEntriesTable(res.data)
                })
            }

            this.pagination.enabled = false

        },
        get(path, callBack) {
            axios.get(path).then((resp) => {
                callBack(resp.data)
            }).catch((error) => {
                console.error(error);
            })
        },
        resetFilter() {
            this.action.reset = false
            this.filter = ''
            this.getEntries('', null)
        },
        next(next) {
            this.getEntries('', DOMAIN + this.ENTRIES_ROUTE + this.$route.params.account_id + "?page=" + this.pagination.next + this.filter)
            this.pagination.next = next + 1
            this.pagination.previus = next - 1
        },
        previus(previus) {
            this.getEntries('', DOMAIN + this.ENTRIES_ROUTE + this.$route.params.account_id + "?page=" + this.pagination.previus + this.filter)
            this.pagination.previus = previus - 1
            this.pagination.next = previus + 1
            if (this.pagination.next == this.pagination.last_page) {
                this.pagination.next = this.pagination.last_page
            }
        },
        last(last) {
            this.getEntries('', last)
            this.pagination.next = this.pagination.last_page
            this.pagination.previus = this.pagination.last_page - 1
            if (this.pagination.previus == 1) {
                this.pagination.previus = 1
            }
        },
        first(first) {
            this.getEntries('', first)
            this.pagination.next = 2
            this.pagination.previus = 1
        }
    }
};
</script>

<style scoped>
.transfer-color {
    background-color: #ffe08738;
}
</style>
