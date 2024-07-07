import { AdministrationPageMethods } from "./tests/commonMethodFiles/administrationPageMethods";
import { AgentActivityPageMethods } from "./tests/commonMethodFiles/agentActivityPageMethods";
import { AgentClusterPageMethods } from "./tests/commonMethodFiles/agentClusterPageMethods";
import { Common_Helper } from "./tests/commonMethodFiles/common_helper";
import { ContentPageMethods } from "./tests/commonMethodFiles/contentPageMethods";
import { LandingPageMethods } from "./tests/commonMethodFiles/landingPageMethods";
import { loginPageMethods } from "./tests/commonMethodFiles/loginPageMethods";
import { ManageDatasetsPageMethods } from "./tests/commonMethodFiles/manageDatasetsPageMethods";
import { ManageSourcePageMethods } from "./tests/commonMethodFiles/manageSourcePageMethods";
import { SignUpPageMethods } from "./tests/commonMethodFiles/signupPage";
import { manageTargetMethod } from "./tests/commonMethodFiles/targetDestinationMethods";
import { UxHelperCommonMethods } from "./tests/commonMethodFiles/uxHelperCommonMethods";
import { WorkbookPageMethods } from "./tests/commonMethodFiles/workbookPageMethods";
import { WorkspacePageMethods } from "./tests/commonMethodFiles/workspacePageMethods";

import * as pageObejects from '@fas/admin-ui-po'

import { DmData, SourceDetails, DatasetDetails } from "./tests/constants/dmData";
import { AdminDetails,UsersDetails,GroupsDetails } from "./tests/constants/adminDetails";
import { AgentData } from "./tests/constants/agentData";
import { TargetAndDestinationsDetails } from "./tests/constants/targetDestinationsDetails";
import { LeanGrammarData } from "./tests/constants/grammarData";
import { WorkbookDetails } from "./tests/constants/workbookDetails";
import { DeleteWithReviewFeatureDetails, GrammarFeatureDetails } from "./tests/constants/workspaceDetails";

export async function globalImports(page) {
    console.log("called globalImports");
    /************************** Connect-ui Page Objects ******************************/
    globalThis.agentActivityPage = new pageObejects.AgentActivityPage(page);
    globalThis.agentClusterPage = new pageObejects.AgentClusterPage(page);
    globalThis.agentClusterGeneralPage = new pageObejects.AgentClusterGeneralPage(page);
    globalThis.agentDownloadPage = new pageObejects.AgentDownloadPage(page);
    globalThis.connectHeaderPage = new pageObejects.ConnectHeaderPage(page);
    globalThis.connectLoginPage = new pageObejects.ConnectLoginPage(page);
    globalThis.connectNavigationPage = new pageObejects.ConnectNavigationPage(page);
    globalThis.connectNavigationPanel = new pageObejects.ConnectNavigationPage(page);
    globalThis.connectSharedPage = new pageObejects.ConnectSharedPage(page);
    globalThis.customAdaptersPage = new pageObejects.CustomAdaptersPage(page);
    globalThis.dataVolumePage = new pageObejects.DataVolumePage(page);
    globalThis.datasetAttributesPage = new pageObejects.DatasetAttributesPage(page);
    globalThis.datasetTemplatesPage = new pageObejects.DatasetTemplatesPage(page);
    globalThis.destinationsPage = new pageObejects.DestinationsPage(page);
    globalThis.grammarSetsPage = new pageObejects.GrammarSetsPage(page);
    globalThis.manageDatasetsGeneralPage = new pageObejects.ManageDatasetsGeneralPage(page);
    globalThis.manageDatasetsPage = new pageObejects.ManageDatasetsPage(page);
    globalThis.manageGrammarsPage = new pageObejects.ManageGrammarsPage(page);
    globalThis.manageSourcesGeneralPage = new pageObejects.ManageSourcesGeneralPage(page);
    globalThis.manageSourcesPage = new pageObejects.ManageSourcesPage(page);
    globalThis.manageTargetsPage = new pageObejects.ManageTargetsPage(page);
    globalThis.manageTargetWizards = new pageObejects.ManageTargetWizards(page);
    globalThis.destinationsPage = new pageObejects.DestinationsPage(page);
    /************************** Admin-ui Page Objects ******************************/
    globalThis.changePasswordPage = new pageObejects.ChangePasswordPage(page);
    globalThis.headerPage = new pageObejects.HeaderPage(page);
    globalThis.landingPage = new pageObejects.LandingPage(page);
    globalThis.loginPage = new pageObejects.LoginPage(page);
    globalThis.navigationPage = new pageObejects.NavigationPage(page);
    globalThis.rolesPage = new pageObejects.RolesPage(page);
    globalThis.signUpPage = new pageObejects.SignUpPage(page);
    globalThis.usagePage = new pageObejects.UsagePage(page);
    globalThis.usersGroupsPage = new pageObejects.UsersGroupsPage(page);
    /************************** Manage-ui Page Objects ******************************/
    globalThis.analyzedSensitiveDataDashboardPage = new pageObejects.AnalyzedSensitiveDataDashboardPage(page);
    globalThis.contentResearchPage = new pageObejects.ContentResearchPage(page);
    globalThis.dataVolumeAnalysisDashboardPage = new pageObejects.DataVolumeAnalysisDashboardPage(page);
    globalThis.manageAnalyzeHeaderPage = new pageObejects.ManageAnalyzeHeaderPage(page);
    globalThis.manageAnalyzeNavigationPage = new pageObejects.ManageAnalyzeNavigationPage(page);
    globalThis.manageAnalyzeSharedPage = new pageObejects.ManageAnalyzeSharedPage(page);
    globalThis.overviewPage = new pageObejects.OverviewPage(page);
    globalThis.workbookTemplatesPage = new pageObejects.WorkbookTemplatesPage(page);
    globalThis.workbookWizardCriteriaStepPage = new pageObejects.WorkbookWizardCriteriaStepPage(page);
    globalThis.workbookWizardGeneralStepPage = new pageObejects.WorkbookWizardGeneralStepPage(page);
    globalThis.workbookWizardSummaryStepPage = new pageObejects.WorkbookWizardSummaryStepPage(page);
    globalThis.workbookPage = new pageObejects.WorkbookPage(page);
    globalThis.workspaceOverviewTabPage = new pageObejects.workspaceOverviewTab(page);
    globalThis.workspaceTemplatesPage = new pageObejects.WorkspaceTemplatesPage(page);
    globalThis.workspaceWizardCriteriaStepPage = new pageObejects.WorkspaceWizardCriteriaStepPage(page);
    globalThis.workspaceWizardDataSubjectStepPage = new pageObejects.WorkspaceWizardDataSubjectStepPage(page);
    globalThis.workspaceWizardDatasetStepPage = new pageObejects.WorkspaceWizardDatasetStepPage(page);
    globalThis.workspaceWizardFeaturesStepPage = new pageObejects.WorkspaceWizardFeaturesStepPage(page);
    globalThis.workspaceWizardGeneralStepPage = new pageObejects.WorkspaceWizardGeneralStepPage(page);
    globalThis.workspaceWizardSecurityStepPage = new pageObejects.WorkspaceWizardSecurityStepPage(page);
    globalThis.workspacesPage = new pageObejects.WorkspacesPage(page);
    /************************** Common Methods ******************************/
    globalThis.administrationPageMethods = new AdministrationPageMethods(page);
    globalThis.agentActivityPageMethods = new AgentActivityPageMethods(page);
    globalThis.agentClusterPageMethods = new AgentClusterPageMethods(page);
    globalThis.common_helper = new Common_Helper(page);
    globalThis.contentPageMethods = new ContentPageMethods(page);
    globalThis.landingPageMethods = new LandingPageMethods(page);
    globalThis.loginPageMethods = new loginPageMethods(page);
    globalThis.manageDatasetPageMethods = new ManageDatasetsPageMethods(page);
    globalThis.manageSourcePageMethods = new ManageSourcePageMethods(page);
    globalThis.signUpPageMethods = new SignUpPageMethods(page);
    globalThis.targetDestinationMethods = new manageTargetMethod(page);
    globalThis.uxHelperCommonMethods = new UxHelperCommonMethods(page);
    globalThis.workbookPageMethods = new WorkbookPageMethods(page);
    globalThis.workspacePageMethods = new WorkspacePageMethods(page);
}

/******************************** Constants *************************************/
globalThis.dmData = DmData;
globalThis.adminDetails = AdminDetails;
globalThis.agentData = AgentData;
globalThis.usersDetails = UsersDetails;
globalThis.groupsDetails = GroupsDetails;
globalThis.sourceDetails = SourceDetails;
globalThis.datasetDetails = DatasetDetails;
globalThis.targetAndDestinationsDetails = TargetAndDestinationsDetails;
globalThis.leanGrammarData = LeanGrammarData;
globalThis.grammarFeatureDetails = GrammarFeatureDetails;
globalThis.deleteWithReviewFeatureDetails = DeleteWithReviewFeatureDetails;
globalThis.workbookDetails = WorkbookDetails;

