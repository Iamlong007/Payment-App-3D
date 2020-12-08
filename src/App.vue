<template>
  <div id="app">
    <div class="w-11/12">
      <div class="w-12/12 cardContainer relative mx-auto">
        <div
          class="mt-10 w-10/12 frontCard mx-auto md:w-5/12 lg:w-3/12 bg-front bg-cover bg-no-repeat block"
        >
          <div class="w-10/12 pt-10 mx-auto flex flex-col">
            <div class="mt-10">
              <p class="ticket text-base text-gray-400 mt-4">{{ ticketId }}</p>
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
                    {{ date }}
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      ticket: "VIP",
      ticketId: "2721 2341 1232 1232",
      cvv: "232",
      name: "JIM-SAIKI GHALIB",
      date: "11/12",
    };
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
.cardContainer:hover {
  transform: rotateY(180deg);
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
