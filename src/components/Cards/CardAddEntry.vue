<template>
  <form>
    <div
      class="container relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0 flex-auto p-4">
      <div class="flex flex-wrap py-3">
        <div class="lg:w-6/12 px-2">
          <select v-model="model" v-on:change="retriveModel()" id="model" v-if="action.models"
            class="border-0 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
            <option v-for="(item, k) in input.model" :key="k" :value="k">{{ item.name }}</option>
          </select>
        </div>
        <div class="lg:w-4/12 px-2">
          <button v-on:click="resetModel()" v-if="action.reset"
            class="text-emerald-500 bg-transparent border border-solid border-emerald-500 hover:bg-emerald-500 hover:text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button">
            RESET
          </button>
        </div>
      </div>
      <div class="flex flex-wrap py-3">
        <!-- ##### menu ########### -->
        <div class="w-full">
          <nav
            class="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-emerald-500 rounded">
            <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div class="w-full" id="example-navbar-info">
                <ul class="flex flex-col lg:flex-row list-none ml-auto w-full justify-center">
                  <li class="nav-item">
                    <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="javascript:void(0)" v-on:click="toggleTabs(1)"
                      v-bind:class="{ 'text-emerald-600 bg-white': action.openTab !== 1, 'text-white bg-emerald-600': action.openTab === 1 }">
                      SPESE
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="javascript:void(0)" v-on:click="toggleTabs(2)"
                      v-bind:class="{ 'text-emerald-600 bg-white': action.openTab !== 2, 'text-white bg-emerald-600': action.openTab === 2 }">
                      ENTRATA
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="javascript:void(0)" v-on:click="toggleTabs(3)"
                      v-bind:class="{ 'text-emerald-600 bg-white': action.openTab !== 3, 'text-white bg-emerald-600': action.openTab === 3 }">
                      TRASFERIMENTO
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="javascript:void(0)" v-on:click="toggleTabs(4)"
                      v-bind:class="{ 'text-emerald-600 bg-white': action.openTab !== 4, 'text-white bg-emerald-600': action.openTab === 4 }">
                      DEBITI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <!-- ##### menu ########### -->
      </div>
      <div
        v-bind:class="{ 'bg-red-200': action.openTab === 1, 'bg-lightBlue-200': action.openTab === 2, 'bg-emerald-200': action.openTab === 3, 'bg-orange-200': action.openTab === 3 }"
        class="container relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg border-0 flex-auto p-4">
        <div class="flex flex-wrap py-3">
          <div class="lg:w-6/12 px-2 py-2 w-full">
            <select v-model="account"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
              <option v-for="item in input.account" :key="item.id" :value="item.id">{{ item.name }}</option>
            </select>
          </div>
          <div class="px-2 py-2 w-full" :class="action.hidedebit ? 'lg:w-3/12' : 'lg:w-6/12'">
            <select v-on:change="checkDebit()" v-if="action.hidecategory" v-model="category"
              class="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150">
              <option v-for="item in input.category" :key="item.id" :value="item.id">{{ item.name }}</option>
            </select>

            <select v-if="!action.hidecategory && !action.hidetransfer_to" v-model="transferto"
              class="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150">
              <option v-for="item in input.account" :key="item.id" :value="item.id">{{ item.name }}</option>
            </select>

            <input v-model="debit_name" v-if="action.hidetransfer_to" type="text" placeholder="Name"
              class="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">

          </div>

          <div class="px-2 py-2 w-full" :class="action.hidedebit ? 'lg:w-3/12' : 'lg:w-6/12'">
            <select v-if="action.hidedebit" v-model="debit"
              class="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150">
              <option v-for="item in input.debit" :key="item.id" :value="item.id">{{ item.name }}</option>
            </select>
          </div>
        </div>
        <div class="flex flex-wrap py-3">
          <div class="lg:w-6/12 px-2 py-2 w-full">
            <input v-model="amount" type="tel" placeholder="0,00 €"
              class="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
          </div>
          <div class="lg:w-6/12 px-2 py-2 w-full">
            <select v-model="currency"
              class="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
              <option v-for="item in input.currency" :key="item.id" :value="item.id">{{ item.name }}</option>
            </select>
          </div>
        </div>

        <div class="flex flex-wrap py-3">
          <div class="lg:w-12/12 px-2 w-full">
            <input placeholder="inserisci nuova label..." v-model="newlabel" type="text"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
          </div>
        </div>

        <div class="flex flex-wrap py-3">
          <div class="lg:w-12/12 px-2 w-full">
            <select v-model="label" multiple
              class="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
              <option
                class="text-xs font-semibold justify-center py-1 px-2 uppercase rounded text-white-600 last:mr-0 mr-1"
                :style="'color: #fff; background-color: ' + item.color" v-for="item in input.tags" :key="item.id"
                :value="item.id">
                {{ item.name }}
              </option>
            </select>
          </div>
        </div>

        <div class="flex flex-wrap py-3">
          <div class="lg:w-12/12 px-2 w-full">
            <textarea v-model="note" type="text" placeholder="Note..."
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
          </div>
        </div>

        <div class="flex flex-wrap py-3">
          <div class="lg:w-4/12 px-2 w-full mb-2 ">
            <select v-model="payment_type"
              class="w-full border-0 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
              <option v-for="item in input.payment_type" :key="item.id" :value="item.id">{{ item.name }}</option>
            </select>
          </div>
          <div class="lg:w-4/12 px-2 mt-2">
            <label for="confirmed"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
              Confermato <input v-model="confirmed" type="checkbox" id="confirmed" value="1" checked>
            </label>
          </div>
          <div class="lg:w-4/12 px-2 mt-2">
            <label for="installment"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
              A rate <input v-model="installment" type="checkbox" value="0">
            </label>
          </div>
          <div class="lg:w-4/12 px-2 mt-2">
            <label for="waranty"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
              In garanzia <input v-model="waranty" type="checkbox" value="1">
            </label>
          </div>
          <div class="lg:w-4/12 px-2">
            <select v-model="planning"
              class="w-full border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
              <option></option>
              <option v-for="(item, k) in input.planning" :key="k" :value="item">{{ item }}</option>
            </select>
          </div>
        </div>

        <div class="flex flex-wrap py-3">
          <div class="lg:w-12/12 px-2 w-full">
            <input v-model="date" type="text"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
          </div>
        </div>

        <div class="flex py-3">
          <div class="lg:w-8/12 px-2 w-full">
            <input v-model="name" type="text"
              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
          </div>
          <div class="lg:w-4/12 px-2 w-full">
            <button v-on:click="setModel()"
              class="w-full text-xs py-3 bg-yellow-500 text-white active:bg-amber-600 font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button">
              SALVA MODELLO
            </button>
          </div>
        </div>

      </div>

      <div class="flex flex-wrap py-3">
        <div class="lg:w-12/12 px-2 w-full">
          <button v-on:click="setEntry()"
            class="w-full bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button">
            INSERISCI
          </button>
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

    </div>
  </form>
</template>

<script>
import ApiService from '../../services/ApiService.vue';

// const X_API_KEY = { "X-API-KEY": "7221" };
const COLORS = [
  "bg-blueGray-200 text-blueGray-600",
  "bg-red-200 text-red-600",
  "bg-orange-200 text-orange-600",
  "bg-amber-200 text-amber-600",
  "bg-teal-200 text-teal-600",
  "bg-lightBlue-200 text-lightBlue-600",
  "bg-indigo-200 text-indigo-600",
  "bg-purple-200 text-purple-600",
  "bg-pink-200 text-pink-600",
  "bg-emerald-200 text-emerald-600 border-white",
]

export default {
  props: {
    entryId: {
      type: Number,
      default: 0,
    },
    isPlanned: {
      type: Number,
      default: 0,
    },
    typeOfEntry: {
      type: String,
      default: 'expenses'
    }
  },
  data() {
    return {
      action: {
        reset: false,
        models: false,
        openTab: 1,
        alert: false,
        alert_message: null,
        hidecategory: true,
        hidedebit: false,
        dateUpdated: false,
        hidetransfer_to: false,
      },
      date: null,
      amount: null,
      type: "expenses",
      category: 3,
      label: [],
      note: null,
      currency: 1,
      account: 1,
      payment_type: 1,
      model: null,
      newlabel: null,
      planned: false,
      confirmed: true,
      waranty: false,
      uuid: null,
      transferto: null,
      name: "",
      debit_name: null,
      planning: null,
      debit: null,
      installment: 0,
      input: {
        tags: [],
        category: [],
        payment: [],
        account: [],
        currency: [],
        payment_type: [],
        model: [],
        planning: ["daily", "monthly", "yearly"],
        debit: [],
        installment: 0
      }
    }
  },
  components: {
  },
  mounted() {
    this.time()
    this.getCategory()
    this.getCurrency()
    this.getAccount()
    this.getLabels()
    this.getPaymentType()
    this.getModels()
    if (this.entryId != 0) {
      this.getEntry()
    }
  },
  methods: {
    checkDebit() {
      if (this.category == 55) {
        this.getDebit()
        this.action.hidedebit = true
      } else {
        this.action.hidedebit = false
      }
    },
    time() {
      const _this = this
      if (this.action.dateUpdated == false) {
        let dateTime = new Date()
        _this.date = dateTime.toISOString().split('T')[0] + " " + dateTime.toLocaleTimeString()
      }
    },
    getDebit() {
      let _this = this
      ApiService.debit().then((res) => {
        let data = res.data
        data.forEach(function (r) {
          _this.input.debit.push(r)
        })
      })
    },
    getCategory() {
      let _this = this
      ApiService.categories().then((res) => {
        let data = res.data
        data.forEach(function (r) {
          r.sub_category.forEach((item) => {
            _this.input.category.push(item)
          })
        })
        _this.input.category.sort(function (a, b) {
          return a.name.localeCompare(b.name);
        });
      })
    },
    getPaymentType() {
      let _this = this
      ApiService.paymentstype().then((res) => {
        let data = res.data
        data.forEach(function (r) {
          _this.input.payment_type.push(r)
        })
      })
    },
    getModels() {
      let _this = this
      ApiService.model().then((res) => {
        let data = res.data
        if (res.data.length > 0) {
          _this.action.models = true
        }
        data.forEach(function (r) {
          _this.input.model.push(r)
        })
      })
    },
    getEntry() {
      let _this = this
      this.action.reset = true
      // let planned = ""
      if (this.isPlanned == 1) {
        // planned = "/planned"
      }

      this.toggleTabs(this.typeOfEntry)

      ApiService.getEntryDetail(this.type, this.entryId).then((res) => {
        let model = res.data

        _this.amount = model.amount
        if (model.type == "expenses") {
          _this.amount = model.amount * -1
        }

        if (model.type == "incoming") {
          _this.action.openTab = 2
        }

        if (model.type == "transfer") {
          _this.action.openTab = 3
        }

        _this.type = model.type
        _this.category = model.category_id
        _this.note = model.note
        _this.currency = model.currency_id
        _this.account = model.account_id
        _this.payment_type = model.payment_type
        _this.waranty = model.waranty == 1 ? true : false
        _this.confirmed = model.confirmed == 1 ? true : false
        _this.date = model.created_at
        _this.action.dateUpdated = true
        _this.uuid = model.uuid
        _this.date = model.date_time

        if (model.transfer == 1) {
          _this.action.hidecategory = true
          _this.transferto = model.transfer_id
        }

        _this.label.forEach((item) => {
          _this.label.push(item.id)
        });
      })

    },
    retriveModel() {
      let model = this.input.model[this.model]
      if (model !== null) {

        this.amount = model.amount
        if (model.type == "expenses") {
          this.amount = model.amount * -1
        }

        if (model.type == "incoming") {
          this.action.openTab = 2
        }

        if (model.type == "transfer") {
          this.action.openTab = 3
        }

        this.type = model.type
        this.category = model.category_id
        this.note = model.note
        this.currency = model.currency_id
        this.account = model.account_id
        this.payment_type = model.payment_type
        this.waranty = model.waranty == 1 ? true : false
        this.confirmed = model.confirmed == 1 ? true : false
        this.name = model.name
        this.action.reset = true
        let _this = this

        this.label.forEach((item) => {
          _this.label.push(item.id)
        });

      }
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
    resetModel() {
      this.date = null
      this.amount = null
      this.type = "expenses"
      this.category = null
      this.label = []
      this.note = null
      this.currency = 1
      this.account = 1
      this.payment_type = 1
      this.model = []
      this.newlabel = null
      this.name = null
      this.action.reset = false
      this.model = null
    },
    setModel() {
      let _this = this
      let data = {
        name: this.name,
        amount: this.amount,
        note: this.note,
        label: this.label,
        account: this.account,
        category: this.category,
        currency: this.currency,
        type: this.type,
        payment_type: this.payment_type,
      }

      if (this.type == "expenses") {
        data.amount = this.amount * -1
      }

      ApiService.setModel(data).then(() => {
        _this.action.alert = true
        _this.action.alert_message = "Modello salvato correttamente"
        setTimeout(_this.action.alert = false, 3000)
      })
    },

    setEntry() {
      let label = this.label
      let _this = this

      if (this.label.length == 0 && this.newlabel != null) {
        label = [this.newlabel]
      }
      let data = {
        amount: this.amount,
        note: this.note,
        label: label,
        account_id: this.account,
        category_id: this.category,
        currency_id: this.currency,
        payment_type: this.payment_type,
        uuid: this.uuid,
        transfer_id: this.transferto,
        date_time: this.date,
        payee_id: this.debit_name,
        installment: this.installment
      }

      if (this.type == "expenses") {
        data.amount = this.amount * -1
      }

      ApiService.setEntry(this.type, data).then(() => {
        _this.date = null,
          _this.amount = null,
          _this.category = data.category_id,
          _this.label = [],
          _this.note = null,
          _this.currency = 1,
          _this.account = data.account_id,
          _this.payment_type = 1,
          _this.model = [],
          _this.newlabel = null,

          _this.action.alert = true
        _this.action.alert_message = _this.type + " inserito correttamente"
        setTimeout(_this.action.alert = false, 3000)

      }).catch((reason) => {

        this.action.alert = true
        this.action.alert_message = "Ops... An error occured"
        console.error(reason);

      })

    },
    getCurrency() {
      let _this = this
      ApiService.currencies().then((res) => {
        let data = res.data
        data.forEach(function (r) {
          _this.input.currency.push(r)
        })
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
    closeAlert: function () {
      this.action.alert = false;
    },
    toggleTabs: function (tabNumber) {
      switch (tabNumber) {
        case 1:
        case 'expenses':
          this.type = "expenses"
          this.category = 3
          this.action.hidecategory = true
          this.action.hidetransfer_to = false
          break;
        case 2:
        case 'incoming':
          this.type = "incoming"
          this.category = 73
          this.action.hidecategory = true
          this.action.hidetransfer_to = false
          break;
        case 3:
        case 'transfer':
          this.type = "transfer"
          this.action.hidecategory = false
          this.action.hidetransfer_to = false
          this.category = null
          break;
        case 4:
        case 'debit':
          this.type = "debit"
          this.action.hidecategory = false
          this.action.hidetransfer_to = true
          this.category = null
          break;
        default:

      }
      this.action.openTab = tabNumber
    }
  },
  randomColor() {
    return COLORS[Math.floor(Math.random() * 9)]
  }
};

</script>
