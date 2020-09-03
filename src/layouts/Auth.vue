import React from "react";
import { Switch, Route } from "react-router-dom";

// components

import Navbar from "@/components/Navbars/AuthNavbar.vue";
import FooterSmall from "@/components/Footers/FooterSmall.vue";

// views

import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

export default function Auth() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section class="absolute w-full h-full">
          <div
            class="absolute top-0 w-full h-full bg-gray-900"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png") + ")",
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <Switch>
            <Route path="/auth/login" component={Login} />
            <Route path="/auth/register" component={Register} />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
