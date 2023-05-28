<template>
  <div>
    <a class="text-blueGray-500 py-1 px-3" href="#pablo" ref="btnDropdownRef" v-on:click="toggleDropdown($event)">
      <i :class="'fas ' + icon"></i>
    </a>
    <div ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48" v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }">

      <router-link :to="'/app/add_entry?planned='+isPlanned+'&entry_id=' + entryId+'&type='+type" v-slot="{ href, navigate, isActive }">
        <a :href="href" @click="navigate"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700" :class="[
            isActive
              ? 'text-emerald-500 hover:text-emerald-600'
              : 'text-blueGray-700 hover:text-blueGray-500',
          ]">
          Edit
        </a>
      </router-link>

      <a href="javascript:void(0)" v-on:click="deleteEntry()"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
        Delete
      </a>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";
import axios from 'axios'
// const X_API_KEY = { "X-API-KEY": "7221" };
const DOMAIN = process.env.VUE_APP_API_PATH_V2;

export default {
  props: {
    entryId: {
      type: Number,
      default: 0,
      required: true
    },
    type: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "fa-ellipsis-v",
    }
  },
  data() {
    return {
      dropdownPopoverShow: false,
      isPlanned : 0
    };
  },
  mounted() {
      if(this.type == "planned-entries") {
        this.isPlanned = 1
      }
    },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
    deleteEntry() {
      axios.delete(DOMAIN + "/api/"+this.type+"/" + this.entryId).then((resp) => {
        console.log(resp)
      }).catch((error) => {
        console.error(error);
      })
    }
  }
};
</script>
