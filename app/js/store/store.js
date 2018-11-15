import Vue from "vue";
import Vuex from "vuex";

import Neysla from "neysla";

import { home } from "./home/store.home.js";

import { router } from "./../routing/routing.js";
import * as Buto from './../../file/system/config.json';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    home
  },
  state: {
    storageName: "asbioybasiy%_Heima-Vue_%dvas=!%%#23423",
    access: {
      baseUrl: null,
      dataUrl: "/f1/",
      tokenUrl: "/oauth2/token",
      headers: {
        Authorization: "Basic dGVzdGNsaWVudDp0ZXN0cGFzcw==",
        "Content-Type": "application/x-www-form-urlencoded"
      }
    },
    neysla: {
      builder: new Neysla(),
      config: {
        name: "form",
        token: {
          name: "accessToken",
          value: null
        },
        url: null
      }
    },
    profile: {
      name: "Unknown user",
      email: null
    },
    models: {
      form: null
    },
    message: {
      state: false,
      status: true,
      text: null
    },
    loader: {
      state: false
    },
    alert: {
      state: false,
      buttons: [],
      description: {
        title: "Título de Confirmación",
        text: "Texto de confirmación"
      }
    },
    year: new Date().getUTCFullYear()
  },
  getters: {
    loginUrl(state){
      return state.access.baseUrl + state.access.tokenUrl;
    }
  },
  mutations: {
    setProfile(state, o){
      for(let u in o){
        state.profile[u] = o[u];
      }
    },
    open(state, o){
      if(o.name === "alert"){
        state[o.name].description.title = o.title;
        state[o.name].description.text = o.text;
        state[o.name].buttons = o.buttons;
      }
      if(o.name === "message"){
        state[o.name].status = o.status;
        state[o.name].text = o.text;
      }
      state[o.name].state = true;
    },
    close(state, o){
      state[o.name].state = false;
    },
    accept(state, i){
      if(state.alert.buttons[i].action instanceof Function){
        state.alert.buttons[i].action();
        return;
      }
      state.alert.state = false;
    },

    logout(state, o){
      if(o.finish || (o.error && o.error.status === 401)){
        localStorage.removeItem(state.storageName);
        state.neysla.config.token.value = null;
        router.push({ name: "login" });
      }
    }
  },
  actions: {
    manualAuth({dispatch, state}, o){
      // localStorage.setItem(state.storageName, btoa(JSON.stringify({ form: o.form })));
      // state.neysla.config.token.value = o.form;
      // dispatch("login");
      router.push({ name: "dashboard" });
    },
    autoAuth({dispatch, state}, o){
      let token = localStorage.getItem(state.storageName);
      if(token){
        token = JSON.parse(atob(token)).form;
      }

      state.neysla.config.token.value = token;
      state.access.baseUrl = Buto.config.form;
      state.neysla.config.url = Buto.config.form + state.access.dataUrl;

      if(state.neysla.config.token.value){
        dispatch("login");
      }
    },

    login({ state }){
      state.neysla.builder.init(state.neysla.config).then(service => {
        state.models.form = service.form.setModel("form");
      }).catch(error => console.log("bad", error));
    }
  }
});
