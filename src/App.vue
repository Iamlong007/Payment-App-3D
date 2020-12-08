<template>
  <div id="app">
    <div class="w-11/12 mx-auto">
      <div
        :class="
          rotate
            ? 'cardContainerRotate relative mx-auto w-12/12'
            : 'w-12/12 cardContainer relative mx-auto'
        "
      >
        <div
          class="mt-10 w-10/12 frontCard mx-auto md:w-5/12 lg:w-3/12 bg-front bg-cover bg-no-repeat block"
        >
          <div class="w-10/12 pt-10 mx-auto flex flex-col">
            <div class="mt-10">
              <p class="ticket text-base text-gray-400 mt-4">{{ num }}</p>
            </div>
            <div class="flex flex-row justify-between">
              <div class="mt-1 w-10/12 pb-6 flex flex-row justify-between">
                <div>
                  <p class="ticket text-gray-400 font-light text-sm">
                    {{ name }}
                  </p>
                </div>
                <div>
                  <p class="ticket text-gray-400 text-xxs pt-1 md:pt-1">
                    {{ expiry }}
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
            v-on:input="setCardName, maxNum"
            type="text"
            class="w-full mt-2 py-1 rounded-sm border font-text font-semibold text-gray-700 text-sm border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div class="mt-4">
          <label for="" class="font-text text-sm text-gray-700"
            >Card Number</label
          >
          <input
            type="number"
            maxlength="2"
            v-on:input="setCardNum"
            class="w-full mt-2 py-1 rounded-sm border font-text font-semibold text-gray-700 text-sm border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>
        <div class="mt-4 flex flex-row justify-between">
          <div class="flex flex-col w-5/12">
            <label for="" class="font-text text-sm text-gray-700"
              >Expiry Date</label
            >
            <input
              type="text"
              v-on:input="setCardExp"
              class="w-full mt-2 py-1 rounded-sm border font-text font-semibold text-gray-700 text-sm border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div class="w-5/12 flex flex-col">
            <label for="" class="font-text text-sm text-gray-700">CVV</label>
            <input
              type="text"
              v-on:input="setCardCvv"
              @focus="rotate = !rotate"
              @blur="rotate = !rotate"
              class="w-full mt-2 py-1 rounded-sm border font-text font-semibold text-gray-700 text-sm border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: "**** **** ****",
      cvv: "***",
      name: "****** *******",
      expiry: "**/**",
      rotate: false,
      maxLength: 20,
    };
  },
  methods: {
    setCardName(event) {
      this.name = event.target.value;
    },
    setCardNum(event) {
      this.num = event.target.value;
    },
    setCardExp(event) {
      this.expiry = event.target.value;
    },
    setCardCvv(event) {
      this.cvv = event.target.value;
    },
    maxNum() {
      if (this.value.length > this.maxLength)
        this.value = this.value.slice(0, this.maxLength);
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
