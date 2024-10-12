import { BiError } from "react-icons/bi";
import BackButton from "./backButton";

export default function ErrorCard() {
  return (
    <div className="w-[600px] h-[400px] grid grid-flow-row place-items-center p-10 border border-error-text rounded-2xl bg-error-text/15 shadow-md">
      <h2 className="text-3xl">Try again</h2>
      <BiError className="w-10 h-10 text-error-text" />
      <BackButton>Go Back</BackButton>
    </div>
  );
}
