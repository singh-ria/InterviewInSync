import { Route, Routes } from "react-router-dom";
import React from "react";

import { ApplicationStatus } from "components/others/applicationStatus";
import ScheduleInterview from "components/others/scheduleInterview/ScheduleInterview";
import { UploadDocuments } from "components/others/uploadDocuments";
import { CandidatePanel } from "pages/candidatePanel";
import InterviewerPanel from "pages/interviewerPanel/InterviewerPanel";
import { HrPanel } from "pages/hrPanel";
import { Login } from "pages/login";
import CardSamples from "components/CardSamples";

import { ROUTE } from "../constants/routes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="schedule-interview" element={<ScheduleInterview />} />
      <Route path={ROUTE.APPLICATION_STATUS} element={<ApplicationStatus />} />
      <Route path={ROUTE.UPLOAD_DOCUMENTS} element={<UploadDocuments />} />
      <Route path={ROUTE.CANDIDATE_PANEL} element={<CandidatePanel />} />
      <Route path={ROUTE.HR_PANEL} element={<HrPanel />} />
      <Route path={ROUTE.INTERVIEWER_PANEL} element={<InterviewerPanel />} />
      <Route path={ROUTE.LOGIN} element={<Login />} />
      <Route path="cards" element={<CardSamples />} />
    </Routes>
  );
}
