<template>
    <div class="block w-full overflow-x-auto mt-10">
        <div class="container px-4 mx-auto py-3 border border-solid border-blueGray-100 shadow"
            v-for="(entry, i) in this.entries" :key="i">
            <div class="flex flex-wrap">
                <div class="flex-l w-full px-4">
                    <span class="text-xs block text-emerald-500 rounded ">{{ entry.date }}</span>
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="w-full px-4 flex-1">
                    <i :class="'block text-lightBlue-400 ' + entry.category.icon"> <span
                            class="px-2 text-blueGray-700 rounded ">
                            {{ entry.category.name }}</span></i>
                    <span class="text-xs block rounded"
                        :class="[entry.payee ? 'text-blueGray-900' : 'text-blueGray-400']">( {{ entry.account }} )
                        {{
                                entry.payee
                        }}</span>
                </div>
                <div class="w-full px-4 flex-1 text-right">
                    <span class="text-sm block text-blueGray-700 rounded ">
                        {{ entry.amount }} <i :class="'fas fa-circle ' + entry.color_amount + ' mr-2'"></i>
                    </span>

                </div>

                <div class="flex-l">
                    <EntryActionDropdown :entryId="entry.id" type="planned-entries" />
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

                    </span>
                </div>

                <div class="w-full px-4 flex-1 text-right">

                </div>

            </div>
        </div>
    </div>
</template>
<script>

import axios from 'axios'
// const X_API_KEY = { "X-API-KEY": "7221" }
const DOMAIN = process.env.VUE_APP_API_PATH_V2
import EntryActionDropdown from "@/components/Dropdowns/EntryActionDropdown.vue";

export default {
    components: {
        EntryActionDropdown
    },
    data() {
        return {
            entries: [],
        }
    },
    mounted() {
        this.getPlannedEntries()
    },
    methods: {
        getPlannedEntries() {
            axios.get(DOMAIN + "/api/planned-entries/").then((resp) => {
                resp.data.data.forEach(e => {
                    let info = {
                        id: e.id,
                        date: e.created_at,
                        amount: e.amount.toFixed(2) + " €",
                        color_amount: e.amount <= 0 ? "text-red-500" : "text-emerald-500",
                        type_amount: e.amount <= 0 ? "expenses" : "incoming",
                        account: e.account.name,
                        note: e.note,
                        planned: e.planned == 0 ? false : true,
                        category: {
                            name: e.sub_category.name,
                            id: e.sub_category.id,
                            icon: e.sub_category.category.icon
                        },
                        payee: null,
                    }

                    this.entries.push(info)
                });

            }).catch((error) => {
                console.error(error);
            })
        }
    }
}
</script>