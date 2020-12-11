<template>
  <div id="app">
    <div class="w-11/12 mx-auto">
      <div class="beat">
        <div
          :class="
            rotate
              ? 'cardContainerRotate relative mx-auto w-12/12'
              : 'w-12/12 cardContainer relative mx-auto'
          "
        >
          <div
            class="mt-10 w-10/12 frontCard mx-auto md:w-5/12 lg:w-3/12 h-40 bg-front bg-cover bg-no-repeat block"
          >
            <div class="w-10/12 pt-10 mx-auto sticky flex flex-col">
              <div class="mt-10">
                <p class="ticket fixed text-base text-gray-400 mt-4">
                  {{ num }}
                </p>
              </div>
              <div class="flex flex-row justify-between">
                <div class="mt-10 w-10/12 pb-6 flex flex-row justify-between">
                  <div>
                    <p class="ticket fixed text-gray-400 font-light text-sm">
                      {{ name }}
                    </p>
                  </div>
                  <div>
                    <p class="ticket text-gray-400 text-xxs pt-1 md:pt-1">
                      {{ month }}{{ year }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="w-10/12 backCard absolute inset-0 mx-auto md:w-5/12 lg:w-3/12 bg-back bg-cover bg-no-repeat block"
          >
            <div class="w-10/12 pt-3 pb-12 mx-auto flex flex-col">
              <div class="w-12/12">
                <p class="ticket text-base text-right text-gray-700 mt-4">
                  {{ cvv }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="bg-white rounded-md shadow-lg p-6 w-9/12 md:w-5/12 lg:w-3/12 mx-auto -mt-8"
      >
        <h1 class="font-header font-semibold pt-5 text-center">
          Enter card details to continue
        </h1>
        <div class="mt-4">
          <label for="" class="font-text text-sm text-gray-700"
            >Cardholder Name</label
          >
          <input
            v-on:input="setCardName"
            type="text"
            name="cardName"
            pattern="[A-Za-z]{3}"
            maxlength="20"
            class="w-full mt-2 py-1 rounded-sm border font-text font-semibold text-gray-700 text-sm border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div class="mt-4">
          <label for="" class="font-text text-sm text-gray-700"
            >Card Number</label
          >
          <input
            type="text"
            v-mask="'#### #### #### ####'"
            maxlength="19"
            v-on:input="setCardNum"
            class="w-full mt-2 py-1 rounded-sm border font-text font-semibold text-gray-700 text-sm border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div class="mt-4 flex flex-row justify-between">
          <div class="flex flex-col w-7/12">
            <label for="" class="font-text text-sm text-gray-700"
              >Expiry Date</label
            >
            <div class="flex flex-row justify-between">
              <input
                type="text"
                v-mask="'##'"
                maxlength="2"
                placeholder="Month"
                v-on:input="setCardExpMonth"
                class="w-5/12 mt-2 py-1 px-1 rounded-sm border font-text font-semibold text-gray-700 text-sm border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                v-mask="'##'"
                maxlength="2"
                placeholder="Year"
                v-on:input="setCardExpYear"
                class="w-5/12 mt-2 py-1 px-1 rounded-sm border font-text font-semibold text-gray-700 text-sm border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
          <div class="w-3/12 flex flex-col">
            <label for="" class="font-text text-sm text-gray-700">CVV</label>
            <input
              type="text"
              v-mask="'###'"
              maxlength="3"
              v-on:input="setCardCvv"
              @focus="rotate = !rotate"
              @blur="rotate = !rotate"
              class="w-full mt-2 py-1 rounded-sm border font-text font-semibold text-gray-700 text-sm border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>

        <div class="mt-8 pb-4">
          <button
            @click="load"
            class="text-white w-full focus:outline-none hover:bg-green-500 py-3 rounded-sm shadow-md mx-auto bg-green-400 font-display font-semibold text-sm"
          >
            <span v-if="initial">Save</span>
            <v-progress-circular
              indeterminate
              color="white"
              :size="20"
              v-if="loading"
            ></v-progress-circular>
          </button>
        </div>
      </div>
      <transition name="fade">
        <div
          v-if="dialog"
          class="bg-white shadow-xl w-8/12 md:w-6/12 lg:w-4/12 h-48 lg:h-56 mx-auto absolute inset-0 mt-40 rounded-md"
        >
          <div class="w-10/12 text-center flex flex-col mx-auto py-3 px-3 mt-5">
            <div>
              <img
                src="./assets/images/ed-memoji.svg"
                alt=""
                class="w-4/12 mx-auto"
              />
            </div>
            <div
              class="pt-4 font-header font-semibold text-green-500 text-base text-center"
            >
              Card saved succesfully
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: "**** **** **** ****",
      cvv: "***",
      name: "****** *******",
      month: "**",
      year: "**",
      rotate: false,
      maxLength: 20,
      loading: false,
      initial: true,
      dialog: false,
    };
  },
  methods: {
    setCardName(event) {
      this.name = event.target.value;
      this.name = this.name.toUpperCase();
    },
    setCardNum(event) {
      this.num = event.target.value;
    },

    setCardExpMonth(event) {
      this.month = event.target.value + "/";
    },
    setCardExpYear(event) {
      this.year = event.target.value;
    },
    setCardCvv(event) {
      this.cvv = event.target.value;
    },
    load() {
      (this.initial = false), (this.loading = true);
      setTimeout(() => {
        (this.loading = false), (this.initial = true), (this.dialog = true);
      }, 3000);
      setTimeout(() => {
        this.dialog = false;
      }, 7500);
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.border {
  border: 4px solid red;
}
.beat {
  animation: heartbeat 1s infinite alternate;
  -webkit-animation: heartbeat 1s infinite alternate;
  -moz-animation: heartbeat 1s infinite alternate;
  -ms-animation: heartbeat 1s infinite alternate;
  -o-animation: heartbeat 1s infinite alternate;
}
@keyframes heartbeat {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.3);
  }
}

.cardContainer {
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.cardContainerRotate {
  transition: transform 0.8s;
  transform: rotateY(180deg);
  transform-style: preserve-3d;
}
/* .cardContainer:hover {
  transform: rotateY(180deg);
} */
/* input {
  text-transform: uppercase;
} */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.frontCard {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.backCard {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: rotateY(180deg);
}

.ticket {
  font-family: Space Mono;
  font-style: normal;
  font-weight: lighter;

  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3),
    -1px -1px 2px rgba(98, 98, 98, 0.5);
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}
.fade-leave-to {
  opacity: 0;
}

.slide-in-enter {
  opacity: 0;
  transform: translateY(-50px);
}
.slide-in-enter-active,
.slide-in-leave-active {
  transition: all 0.8s ease;
}

.slide-in-leave-to {
  opacity: 1;
  transform: translateY(-290px);
}
</style>
