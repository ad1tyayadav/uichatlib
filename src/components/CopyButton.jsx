import { ScriptCopyBtn } from "./magicui/script-copy-btn"

export function ScriptCopyBtnDemo() {
  const customCommandMap = {
    npm: "npm install aibotchat",
    // yarn: "soon",
    // pnpm: "soon",
    // bun: "soon",
  };
  return (
    <ScriptCopyBtn
      
      codeLanguage="shell"
      lightTheme="nord"
      darkTheme="vitesse-dark"
      commandMap={customCommandMap}
    />
  );
}
