<template>
  <DocumentationCard title="Data Documentation">
    <p style="max-width: 800px" class="mb-4">
      College Scorecard provides data at the institution-level and data
      by field of study. The technical data documents provide in-depth
      information about these data. The data dictionary includes
      separate worksheets with institution-level and field of study
      dictionaries as well as cohort maps describing the timing aspects
      of each data element.
    </p>
    <div class="">
      <v-row>
        <v-col>
          <v-btn
            color="secondary-green"
            @click="analytics.trackDownload('CollegeScorecardDataDictionary.xlsx')"
            href='/files/CollegeScorecardDataDictionary.xlsx'
            target="_blank"
            :size="breakpoints.smAndDown.value ? 'small' : 'large'"
            class="my-3"
          >
            <v-icon size="x-small" class="pr-1" icon="fa:fas fa-download" />
            Data Dictionary (.xlsx, 703 KB)
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2>Technical Documentation</h2>
        </v-col>
      </v-row>
      <v-row class="my-0">
        <v-col>
          <v-btn
            variant="outlined"
            @click="analytics.trackDownload('InstitutionDataDocumentation.pdf')"
            href='/files/InstitutionDataDocumentation.pdf'
            target="_blank"
            text
            outlined
            class="mb-3 mr-2"
            :size="breakpoints.smAndDown.value ? 'small' : 'default'"
          >
            <v-icon size="x-small" class="pr-1" icon="fa:fas fa-file-pdf" />
            Institution-Level Data Files (.pdf, 520 KB)
          </v-btn>
          <v-btn
            variant="outlined"
            @click="analytics.trackDownload('FieldOfStudyDataDocumentation.pdf')"
            href='/files/FieldOfStudyDataDocumentation.pdf'
            target="_blank"
            text
            outlined
            class="mb-3"
            :size="breakpoints.smAndDown.value ? 'small' : 'default'"
          >
            <v-icon size="x-small" class="pr-1" icon="fa:fas fa-file-pdf" />
            Field of Study Data Files (.pdf, 827 KB)
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <h2>Data Errata</h2>
        </v-col>
      </v-row>
      <v-row class="my-0">
        <v-col>
          <v-btn
            variant="outlined"
            @click="analytics.trackDownload('EarningsDataErrata.pdf')"
            href="/files/EarningsDataErrata.pdf"
            target="_blank"
            text
            outlined
            class="mb-3 mr-2"
            :size="breakpoints.smAndDown.value ? 'small' : 'default'"
          >
            <v-icon size="x-small" class="pr-1" icon="fa:fas fa-file-pdf" />
            Cohort Alignment on Earnings Calculations <span :class="{ 'd-none': breakpoints.smAndDown }">(.pdf, 476 KB)</span>
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <DocumentationHelp />
  </DocumentationCard>
</template>

<script setup>
const analytics = useAnalytics()
const { breakpoints } = useVuetify()
</script>