<template>
  <DocumentationCard title="Data Home">
    <p class="mb-4">
      Download the data that appear on the College Scorecard, as well as
      supporting data on student completion, debt and repayment,
      earnings, and more.
    </p>
    <p class="pb-4">
      This data was
      <strong>last updated January 16, 2025</strong>.
    </p>

    <h2 class="my-5">
      All Data Files
      <v-btn class="ml-2" color="secondary-green"
        href="https://ed-public-download.scorecard.network/downloads/College_Scorecard_Raw_Data_01162025.zip">Download
        (.zip, 390 MB)
        <v-icon right dark size="x-small" class="ml-2" icon="fa:fas fa-download"/>
        </v-btn>
    </h2>

    <ul class="font-weight-regular">
      <li>
        Institution-level data files for 1996-97 through 2022-23
        containing aggregate data for each institution. Includes
        information on institutional characteristics, enrollment,
        student aid, costs, and student outcomes.
      </li>
      <li>
        Field of study-level data files for the pooled 2014-15, 2015-16
        award years through the pooled 2018-19, 2019-20 award years
        containing data at the credential level and 4-digit CIP code
        combination for each institution. Includes information on
        cumulative debt at graduation and earnings one year after
        graduation.
      </li>
      <li>
        Crosswalk files for 2000-01 through 2022-23 that link the
        Department’s OPEID with an IPEDS UNITID for each institution.
      </li>
    </ul>
    <v-row>
      <v-col>
        <h4 class="my-5 d-inline-block">
          Most Recent Institution-Level Data
        </h4>
        <v-btn size="small" color="secondary-green" class="ml-0 ml-sm-2"
          href="https://ed-public-download.scorecard.network/downloads/Most-Recent-Cohorts-Institution_01162025.zip">Download
          (.zip, 22 MB)
          <v-icon right dark size="x-small" class="ml-2" icon="fa:fas fa-download"/>
        </v-btn>
      </v-col><v-col>
        <h4 class="my-5 d-inline-block">
          Most Recent Data by Field of Study
        </h4>
        <v-btn size="small" class="ml-0 ml-sm-2" color="secondary-green"
          href="https://ed-public-download.scorecard.network/downloads/Most-Recent-Cohorts-Field-of-Study_01162025.zip">Download
          (.zip, 13 MB)
          <v-icon right dark size="x-small" class="ml-2" icon="fa:fas fa-download"/></v-btn>
      </v-col>
    </v-row>

    <DocumentationHelp />
  </DocumentationCard>
</template>

<style scoped lang="scss">
li {
  margin-left: 2rem;
}
</style>
