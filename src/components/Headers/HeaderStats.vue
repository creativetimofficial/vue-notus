<template>
  <!-- Header -->
  <div class="relative bg-emerald-600 pb-32 pt-12">
    <div class="px-1 md:px-10 mx-auto w-full">
      <div id="statsWallet">
        <div class="px-2 flex overflow-x-auto mb-2">
          <CardWallet v-for="w in wallets" :key="w.account_id" :statTitle="w.account_label" :statWallet="w.total_wallet"
            :statColor="w.color" :statIdWallet="w.account_id"></CardWallet>
        </div>
        <!-- Card stats -->
        <div class="flex overflow-x-auto">
          <div class="min-w px-2">
            <router-link to="/app/graph/wallet" v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">
                <card-stats statSubtitle="WALLET" :statTitle="wallet.statTitle + ' €'"
                  statIconColor="bg-lightBlue-500" />
              </a>
            </router-link>
          </div>

          <div class="min-w px-2">
            <router-link to="/app/graph/wallet" v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">
                <card-stats statSubtitle="MY PLANNED" :statTitle="walletPlanned.statTitle + ' €'"
                  :statArrow="walletPlanned.statArrow" :statPercent="walletPlanned.statPercent"
                  statIconName="fas fa-money-bill" statIconColor="bg-teal-500" />
              </a>
            </router-link>
          </div>

          <div class="min-w px-2">
            <router-link to="/app/graph/wallet" v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">
                <card-stats statSubtitle="MY PLANNED" :statTitle="health.statTitle + ' €'"
                  :statArrow="health.statArrow" :statPercent="health.statPercent"
                  statIconName="fas fa-money-bill" statIconColor="bg-teal-500" />
              </a>
            </router-link>
          </div>

          <div class="min-w px-2">
            <router-link to="/app/entries/type/incoming" v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">
                <card-stats statSubtitle="MY INCOMING" :statTitle="incoming.statTitle + ' €'"
                  :statArrow="incoming.statArrow" :statPercent="incoming.statPercent"
                  :statPercentColor="incoming.statPercentColor" statDescripiron="Last month" statIconName="fas fa-coins"
                  statIconColor="bg-lightBlue-500" />
              </a>
            </router-link>
          </div>

          <div class="min-w px-2">
            <router-link to="/app/entries/type/expenses" v-slot="{ href, navigate }">
              <a :href="href" @click="navigate">
                <card-stats statSubtitle="MY EXPENSES" :statTitle="expenses.statTitle + ' €'"
                  :statArrow="expenses.statArrow" :statPercent="expenses.statPercent"
                  :statPercentColor="expenses.statPercentColor" statDescripiron="Last month"
                  statIconName="fas fa-hand-holding-usd" statIconColor="bg-red-500" />
              </a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";
import CardWallet from "@/components/Cards/CardWallet.vue";
import StatsService from "../../services/StatsService.vue";

export default {
  components: {
    CardStats, CardWallet
  },
  data() {
    return {
      wallets: [],
      wallet: {
        statTitle: 0,
        statArrow: "up",
        statPercent: 0,
        statPercentColor: "text-emerald-500"
      },
      health: {
        statTitle: 0,
        statArrow: "up",
        statPercent: 0,
        statPercentColor: "text-emerald-500"
      },
      walletPlanned: {
        statTitle: 0,
        statArrow: "up",
        statPercent: 0,
        statPercentColor: "text-emerald-500"
      },
      incoming: {
        statTitle: 0,
        statArrow: "up",
        statPercent: 0,
        statPercentColor: "text-emerald-500"
      },
      expenses: {
        statTitle: 0,
        statArrow: "up",
        statPercent: 0,
        statPercentColor: "text-emerald-500"
      },
      planned: 0
    }
  },
  mounted() {
    this.update()
  },
  watch: {
    "$store.state.actions.updatestats": function (updatestats) {
      if(updatestats === true) {
        this.update()
      }
    },
  },
  methods: {
    update() {
      this.getMonthIncoming()
      this.getMonthexpenses()
      this.getWallet()
      this.getWallets()
      this.getWalletPlanned()
      this.getHealth()

    },
    getWallet() {
      StatsService.total().then((resp) => {
        let data = resp.data
        this.wallet.statTitle = data.total.toFixed(2)

      }).catch((error) => {
        console.error(error);
      })
    },

    getHealth() {
      StatsService.health().then((resp) => {
        let data = resp.data
        this.health.statTitle = data.total.toFixed(2)

      }).catch((error) => {
        console.error(error);
      })
    },
    
    getWalletPlanned() {
      StatsService.planned().then((resp) => {

        let data = resp.data
        this.walletPlanned.statTitle = data.total.toFixed(2)
        
      }).catch((error) => {
        console.error(error);
      })

    },
    getMonthIncoming() {
      StatsService.incoming().then((resp) => {
        let data = resp.data
        this.incoming.statTitle = data.total.toFixed(2)
        this.incoming.statPercent = data.percentage.toFixed(2)
        this.incoming.statArrow = data.percentage <= 0 ? "down" : "up"
        this.incoming.statPercentColor = data.percentage <= 0 ? "text-red-500" : "text-emerald-500"

      }).catch((error) => {
        console.error(error);
      })
    },
    getMonthexpenses() {
      StatsService.expenses().then((resp) => {
        let data = resp.data
        this.expenses.statTitle = data.total.toFixed(2)
        this.expenses.statPercent = data.percentage.toFixed(2)
        this.expenses.statArrow = data.percentage < 0 ? "down" : "up"
        this.expenses.statPercentColor = data.percentage > 0 ? "text-red-500" : "text-emerald-500"

      }).catch((error) => {
        console.error(error);
      })
    },
    getWallets() {
      this.wallets = []
      StatsService.wallets().then((resp) => {
        let data = resp.data
        data.forEach(e => {
          this.wallets.push(e)
        });
      }).catch((error) => {
        console.error(error);
      })
    }
  }
};
</script>

<style scoped>
.min-w {
  min-width: 240px;
}

.relative.flex.flex-col.min-w-0.break-words.bg-white.rounded.mb-6.xl\:mb-0.shadow-lg {
  min-height: 115px;
}

#statsWallet a {
  min-width: 240px;
}
</style>