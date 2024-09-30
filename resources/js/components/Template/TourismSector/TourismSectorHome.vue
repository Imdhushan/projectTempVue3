<template>
  <div class="container">

    <div class="row g-3 mb-3 mt-4">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <Card>
          <CardBody>
            
          </CardBody>
        </Card>
      </div>
    </div>
    <div class="row g-3 mb-3 mt-4">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <Card custom-class="overflow-hidden" custom-style="min-width: 12rem">
            <CardBody custom-class="p-4">
              <div class="row flex-between-center">
                <div class="col-auto">
                  <h5>Tourism Sector</h5>
                </div>
              </div>
              <ul class="nav nav-tabs" id="myTab" role="tablist">

                <li class="nav-item">
                  <a class="nav-link active" id="personal-tab" data-bs-toggle="tab" href="#tab-personal" role="tab" aria-controls="tab-personal" aria-selected="true">
                    Asset
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="employee-tab" data-bs-toggle="tab" href="#tab-employee" role="tab" aria-controls="tab-employee" aria-selected="true">
                    Conflict
                  </a>
                </li>
                
              </ul>
              <div class="tab-content border border-top-0 p-3" id="myTabContent">
                <div class="tab-pane fade show active" id="tab-personal" role="tabpanel" aria-labelledby="personal-tab">
                  <p>Test</p>
                </div>
                <div class="tab-pane fade" id="tab-employee" role="tabpanel" aria-labelledby="employee-tab">
                  <p>Test</p>
                </div>
                
              </div>
            </CardBody>
          </Card>

        </div>
    </div>  
  </div>
</template>

<script setup>
import {computed, onMounted, ref, watch} from "vue";

import {useStore} from "vuex";
import {findLocalStorage} from "../../../composables/storage/LocalStorageHandler";
import Card from "../../bootstrap/Card.vue";
import CardBody from "../../bootstrap/CardBody.vue";


const store = useStore();
// State to track the current step of the wizard
const currentStep = ref(1);

// Function to update the current step
const setCurrentStep = (step) => {
  currentStep.value = step;
};

const trigureStepper = computed(() => {
  return store.getters.stepperStep;
});
watch(trigureStepper,function (step,oldStep) {
  setCurrentStep(step);
});

onMounted(()=>{
  let step = findLocalStorage('stepper');
  if (step){
      setCurrentStep(step);
  }
})
</script>

<style scoped>
.nav-item a.disabled {
  pointer-events: none;
  color: #ccc;
}

.nav-item a.active {
  font-weight: bold;
}
</style>
