import { AnimatedSpan, Terminal, TypingAnimation } from "../components/magicui/terminal";

export function TerminalDemo() {
    return (
        <Terminal className="bg-gray-900">
            <TypingAnimation className="text-green-500">&gt; npm install aibotchat</TypingAnimation>

            <AnimatedSpan delay={500} className="text-cyan-500">
                <span>⚡ Checking package compatibility...</span>
            </AnimatedSpan>

            <AnimatedSpan delay={1200} className="text-green-500">
                <span>✔ Found React v18+ & Tailwind CSS v3+</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2000} className="text-purple-500">
                <span>🌀 Initializing chat interface engine...</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2800} className="text-green-500">
                <span>✔ Connected to AI service providers</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3500} className="text-yellow-500">
                <span>⚠ Applying security protocols...</span>
            </AnimatedSpan>

            <AnimatedSpan delay={4200} className="text-green-500">
                <span>✔ Encryption layer activated</span>
            </AnimatedSpan>

            <AnimatedSpan delay={5000} className="text-blue-500">
                <span>🤖 Loading AI personalities:</span>
                <span className="ml-2 text-muted-foreground">[Assistant][SupportBot][SalesAI]</span>
            </AnimatedSpan>

            <AnimatedSpan delay={6000} className="text-green-500">
                <span>✔ Memory context system initialized</span>
            </AnimatedSpan>

            <AnimatedSpan delay={6800} className="text-purple-500">
                <span>🎨 Applying theme configurations...</span>
            </AnimatedSpan>

            <TypingAnimation delay={7500} className="text-green-500">
                Success! AI Chat Interface v1.4.2 ready
            </TypingAnimation>

            <TypingAnimation delay={8500} className="text-muted-foreground">
                Ready to launch your AI experience 🚀
            </TypingAnimation>
        </Terminal>
    );
}
