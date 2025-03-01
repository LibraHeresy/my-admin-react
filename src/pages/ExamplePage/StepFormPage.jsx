import { useEffect } from "react";
import { Card, Steps } from "antd";
import StepForm1 from "./components/StepFormPage/StepForm1.jsx";
import StepForm2 from "./components/StepFormPage/StepForm2.jsx";
import StepForm3 from "./components/StepFormPage/StepForm3.jsx";
import useStore from "@/store/step";
import "./StepFormPage.less";

const StepFormPage = () => {
  const stepStore = useStore();
  const { step } = stepStore;

  useEffect(() => {
    stepStore.setTransferInfo(null);
    stepStore.setStep(0);
  }, []);

  const renderStepForm = () => {
    switch (step) {
      case 0:
        return <StepForm1 />;
      case 1:
        return <StepForm2 />;
      case 2:
        return <StepForm3 />;
      default:
        return null;
    }
  };

  return (
    <Card style={{ borderRadius: "10px", border: "none" }}>
      <div className="step-form-page">
        <Steps current={step}>
          <Steps.Step title="填写转账信息" />
          <Steps.Step title="确认转账信息" />
          <Steps.Step title="完成" />
        </Steps>

        <div className="step-form-action">{renderStepForm()}</div>
      </div>
    </Card>
  );
};

export default StepFormPage;
