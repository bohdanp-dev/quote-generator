import {TelegramIcon, TelegramShareButton, TwitterShareButton, XIcon} from "react-share";

const SocialShare = ({url}) =>{
    const shareUrl = url;
    return (
        <>
            <TwitterShareButton url={shareUrl}>
                <XIcon className="margin-16 border-16 icon-size-48 hover-pointer"/>
            </TwitterShareButton>
            <TelegramShareButton url={shareUrl}>
                <TelegramIcon className="margin-16 border-16 icon-size-48 hover-pointer"/>
            </TelegramShareButton>
        </>
    );
}

export default SocialShare;
