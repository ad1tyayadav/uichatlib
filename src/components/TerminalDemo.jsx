import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from "../components/magicui/terminal";

export function TerminalDemo() {
    return (
        <Terminal>
            <TypingAnimation>&gt; npm i aibotchat</TypingAnimation>
            <AnimatedSpan delay={500} className="text-green-500">
                <span>✔ Installing dependencies...</span>
            </AnimatedSpan>

            <AnimatedSpan delay={1500} className="text-green-500">
                <span>✔ Installing aibotchat...</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2000} className="text-green-500">
                <span>✔ Verifying project...</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2500} className="text-green-500">
                <span>✔ Validating codebase...</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3000} className="text-green-500">
                <span>✔ Validating import ChatBot...</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3500} className="text-green-500">
                <span>✔ Building AI Bot Chat...</span>
            </AnimatedSpan>

            <TypingAnimation delay={4000} className="text-muted-foreground">
                Success! Chat Bot initialization completed.
            </TypingAnimation>

            <TypingAnimation delay={5000} className="text-muted-foreground">
                You may now add Chat Bot.
            </TypingAnimation>
        </Terminal>
    );
}
