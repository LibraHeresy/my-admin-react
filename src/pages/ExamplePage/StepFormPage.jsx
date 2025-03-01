import { useEffect } from "react";
import { Card, Steps } from "antd";
import StepForm1 from "./components/StepFormPage/StepForm1";
import StepForm2 from "./components/StepFormPage/StepForm2";
import StepForm3 from "./components/StepFormPage/StepForm3";
import { useStore } from "@/store/step";
import "./StepFormPage.less";

const StepFormPage = () => {
  const stepStore = useStore();
  const { step } = stepStore;

  useEffect(() => {
    stepStore.setTransferInfo(null);
    stepStore.setStep(0);
  }, [stepStore]);

  return (
    <Card style={{ borderRadius: "10px", border: "none" }}>
      <div className="step-form-page">
        <Steps current={step}>
          <Steps.Step title="填写转账信息" />
          <Steps.Step title="确认转账信息" />
          <Steps.Step title="完成" />
        </Steps>

        <div className="step-form-action">
          {step === 0 && <StepForm1 />}
          {step === 1 && <StepForm2 />}
          {step === 2 && <StepForm3 />}
        </div>
      </div>
    </Card>
  );
};

export default StepFormPage;
