<template>
    <router-link :to="'/admin/entries/' + statIdWallet" v-slot="{ href, navigate, isActive }">
        <a :href="href" @click="navigate"
            :class="[
                isActive
                    ? 'border-solid border-black'
                    : '',
            ]">
            <div
                :class="'px-4 flex-1 rounded border border-solid border-blueGray-100 block p-4 shadow-lg mr-4 ' + statColor">
                <span
                    class="text-xs font-semibold block text-center py-1 px-2 uppercase rounded-full uppercase last:mr-0 min-w">
                    {{ statTitle }}
                </span>
                <span class="text-sm block text-center">{{ statWallet }}</span>
            </div>

        </a>
    </router-link>
</template>
<script>
export default {
    name: "card-stats",
    props: {
        statTitle: {
            type: String,
            default: "Credit card",
            required: true
        },
        statWallet: {
            type: String,
            default: "2000",
            required: true
        },
        statColor: {
            type: String,
            default: "text-emerald-600 bg-emerald-200",
        },
        statIdWallet: {
            type: Number,
            required: true
        }
    },
};
</script>
<style scoped>
.min-w {
    min-width: 187px;
}
</style>