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

      <a href="javascript:void(0)" v-on:click="deleteEntry()"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700">
        Forget debit
      </a>
    </div>
  </div>
</template>
<script>
import { createPopper } from "@popperjs/core";
import ApiService from "../../services/ApiService.vue";

export default {
  props: {
    entryId: {
      type: Number,
      default: 0,
      required: true
    },
    icon: {
      type: String,
      default: "fa-ellipsis-v",
    }
  },
  data() {
    return {
      dropdownPopoverShow: false,
    };
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
      ApiService.deleteEntry(this.entryId).then((resp) => {
        console.log(resp)
      }).catch((error) => {
        console.error(error);
      })
    }
  }
};
</script>
