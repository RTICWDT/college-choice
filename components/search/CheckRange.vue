<template>
  <div>
    <p class="subhead-2" :id="generatedId" v-if="props.legendTitle">
      <slot name="label">
        {{ props.legendTitle }}
      </slot>
    </p>

    <v-row>
      <v-col class="my-2 py-0 d-flex justify-space-around align-content-center">
        <v-slider
          v-model="sliderValue"
          :id="props.id"
          class="align-center pa-0 ma-0"
          :class="`${props.id}-hack-select`"
          hide-details
          @update:modelValue="handleSliderInput"
          :min="props.min"
          :max="props.max"
          :color="trackColor"
          :track-color="trackBackground"
          thumb-color="secondary-green"
          thumb-label
          :title="props.id"
          aria-label="Slider Input"
        >
          <template #prepend>
            <div style="display:inline-flex;min-width:100%;">
              <v-checkbox
                v-model="enableSlider"
                :id="`${props.id}-check`"
                @update:modelValue="handleEnable"
                color="secondary-green"
                class="pa-0 ma-0"
                hide-details
                :aria-labelledby="props.id"
                @keydown.enter.prevent
              />
            </div>
          </template>

          <template #append>
            <v-text-field
              v-model="textFieldValue"
              :id="`${props.id}-field`"
              :title="`${props.id}-field`"
              hide-details
              type="number"
              min="0"
              @update:modelValue="handleTextFieldInput"
              variant="outlined"
              density="compact"
              :prefix="prefix"
              :suffix="props.appendText"
              :aria-labelledby="props.id"
              :max-width="130"
              @keydown.enter.prevent
            />
          </template>
        </v-slider>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const props = defineProps({
  legendTitle: {
    type: String,
    default: null,
  },
  modelValue: {
    type: Number,
    default: 0,
  },
  enable: Boolean,
  min: Number,
  max: Number,
  step: Number,
  appendText: {
    type: String,
    default: null,
  },
  andUp: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
  },
})

const emit = defineEmits(['update:modelValue', 'slider-toggle'])
const sliderValue = ref(props.modelValue)
const textFieldValue = ref(props.modelValue)
const enableSlider = ref(props.enable)
const trackColor = ref('secondary')
const trackBackground = ref('grey')

const prefix = computed(() => {
  let text = ""
  text += props.andUp ? "≥ " : "≤ "
  text += props.appendText == "k" ? "$" : ""
  return text
})

const generatedId = computed(() => {
  return "component-" + Math.random().toString(36).substring(2, 9) + "-label"
})

watch(() => props.modelValue, (newValue) => {
  sliderValue.value = Math.round(newValue)
  textFieldValue.value = Math.round(newValue)
})

watch(() => props.enable, (newValue) => {
  enableSlider.value = newValue
})

onMounted(() => {
  if (props.andUp) {
    trackColor.value = "grey"
    trackBackground.value = "secondary-green"
  } else {
    trackColor.value = "secondary-green"
    trackBackground.value = "grey"
  }

  emit('update:modelValue', props.modelValue || 0);
})

function handleSliderInput(value) {
  const roundedValue = Math.round(value);
  
  if (!enableSlider.value && roundedValue != 0) {
    enableSlider.value = true;
    handleEnable(enableSlider.value);
  }

    textFieldValue.value = roundedValue;
    sliderValue.value = roundedValue; // Update slider value to rounded value

    // auto disable checkmark if rounded value is 0
    if (roundedValue == 0) {
      enableSlider.value = false;
      handleEnable(enableSlider.value);
    }

    emit('update:modelValue', roundedValue);
}

function handleTextFieldInput(value) {
  if (!enableSlider.value && value != 0) {
    enableSlider.value = true
    handleEnable(enableSlider.value)
  }

  if (value != 0) {
    sliderValue.value = Number(value)
    emit('update:modelValue', Number(value))
  }
}

function handleEnable(e) {
  emit('slider-toggle', e)
}

onMounted(() => {
  //extreme hack to get aria-labels on thumbs for v-slider cause vuetify is horrible with accessibility
  const slider = document.getElementsByClassName(`${props.id}-hack-select`)[0]
  if (!slider) { return }
  const container = slider.getElementsByClassName('v-slider__container')[0]
  if (!container) { return }
  const thumb = container.getElementsByClassName('v-slider-thumb')[0]
  if (!thumb) { return }
  thumb.setAttribute('aria-label', `${props.legendTitle} Slider Thumb`)
})
</script>

<style lang="scss" scoped>
.subhead-2 {
  margin-top: 0.3rem !important;
  margin-bottom: 0.3rem !important;
  font-weight: 600;
  font-family: "Montserrat", sans-serif !important;
}

.appendedText {
  margin-top: 20px;
  padding: 0 5px;
}

:deep(.v-slider-track__background--opacity) {
  opacity: 1;
}
</style>