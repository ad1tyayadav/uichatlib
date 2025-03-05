import HeroVideoDialog from "../components/magicui/hero-video-dialog";

export function DemoVideo() {
    return (
        <div className="relative">
            <HeroVideoDialog
                className="block dark:hidden"
                animationStyle="from-center"
                videoSrc="Aibotchat.mp4"
                thumbnailSrc="thumbnail.png"
                thumbnailAlt="Demo Video"
            />
        </div>
    );
}
