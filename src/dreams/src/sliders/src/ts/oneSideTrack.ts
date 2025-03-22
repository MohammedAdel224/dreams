import { assertBetween0And100 } from "../../../helpers/util";
import Track from "./track";

class OneSideTrack extends Track{
    fill(percent: number){
        assertBetween0And100(percent);
        const track = this.toElement();
        track.style.setProperty('--fill-percent', `${percent}%`);
    }
}

export default OneSideTrack;
