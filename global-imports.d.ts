import { DmData, SourceDetails, DatasetDetails } from "./tests/constants/dmData";
import { AdminDetails,UsersDetails,GroupsDetails } from "./tests/constants/adminDetails"
import { AgentData } from "./tests/constants/agentData";
import { TargetAndDestinationsDetails } from "./tests/constants/targetDestinationsDetails";
import { LeanGrammarData } from "./tests/constants/grammarData";
import { WorkbookDetails } from "./tests/constants/workbookDetails";
import { DeleteWithReviewFeatureDetails, GrammarFeatureDetails } from "./tests/constants/workspaceDetails";

declare global {
    /************************** Common Methods ******************************/
    var administrationPageMethods;
    var agentActivityPageMethods;
    var agentClusterPageMethods;
    var common_helper;
    var contentPageMethods;
    var landingPageMethods;
    var loginPageMethods;
    var manageDatasetPageMethods;
    var manageSourcePageMethods;
    var signUpPageMethods;
    var targetDestinationMethods;
    var uxHelperCommonMethods;
    var workbookPageMethods;
    var workspacePageMethods;
    /************************** Connect-ui Page Objects ******************************/
    var agentActivityPage;
    var agentClusterPage;
    var agentClusterGeneralPage;
    var agentDownloadPage;
    var connectHeaderPage;
    var connectLoginPage;
    var connectNavigationPage;
    var connectNavigationPanel;
    var connectSharedPage;
    var customAdaptersPage;
    var dataVolumePage;
    var datasetAttributesPage;
    var datasetTemplatesPage;
    var destinationsPage;
    var grammarSetsPage;
    var manageDatasetsGeneralPage;
    var manageDatasetsPage;
    var manageGrammarsPage;
    var manageSourcesGeneralPage;
    var manageSourcesPage;
    var manageTargetsPage;
    var manageTargetWizards;
    var destinationsPage;
    /************************** Admin-ui Page Objects ******************************/
    var changePasswordPage;
    var headerPage;
    var landingPage;
    var loginPage;
    var navigationPage;
    var rolesPage;
    var signUpPage;
    var usagePage;
    var usersGroupsPage;
    /************************** Manage-ui Page Objects ******************************/
    var analyzedSensitiveDataDashboardPage;
    var contentResearchPage;
    var dataVolumeAnalysisDashboardPage;
    var manageAnalyzeHeaderPage;
    var manageAnalyzeNavigationPage;
    var manageAnalyzeSharedPage;
    var overviewPage;
    var workbookTemplatesPage;
    var workbookWizardCriteriaStepPage;
    var workbookWizardGeneralStepPage;
    var workbookWizardSummaryStepPage;
    var workbookPage;
    var workspaceOverviewTabPage;
    var workspaceTemplatesPage;
    var workspaceWizardCriteriaStepPage;
    var workspaceWizardDataSubjectStepPage;
    var workspaceWizardDatasetStepPage;
    var workspaceWizardFeaturesStepPage;
    var workspaceWizardGeneralStepPage;
    var workspaceWizardSecurityStepPage;
    var workspacesPage;
    /********************************** Constants **********************************/
    var dmData: typeof DmData;
    var adminDetails: typeof AdminDetails;
    var agentData: typeof AgentData;
    var usersDetails: typeof UsersDetails;
    var groupsDetails: typeof GroupsDetails;
    var sourceDetails: typeof SourceDetails;
    var datasetDetails: typeof DatasetDetails;
    var targetAndDestinationsDetails: typeof TargetAndDestinationsDetails;
    var leanGrammarData: typeof LeanGrammarData;
    var grammarFeatureDetails: typeof GrammarFeatureDetails;
    var deleteWithReviewFeatureDetails: typeof DeleteWithReviewFeatureDetails;
    var workbookDetails: typeof WorkbookDetails;
}
