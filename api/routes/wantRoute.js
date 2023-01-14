import {Router} from "express";
import {
  getAllFlats,
  getSortedFlats,
  wantsFourMoney,
  wantsFourPerson,
  wantsThreePerson,
  wantsTwoPerson
} from "../controllers/wantController.js";

const router = new Router();

router.get("/wantTwo?", wantsTwoPerson);
router.get("/wantThree?", wantsThreePerson);
router.get("/wantFour?", wantsFourPerson);
router.get("/wantFourMoney?", wantsFourMoney);
router.get("/flats?", getSortedFlats);
router.get("/allFlats", getAllFlats);

export default router;