import {Router} from "express";
import tradeController from "../controllers/tradeController.js";

const router = new Router();

router.get("/wantTwo?", tradeController.wantsTwoPerson);
router.get("/wantThree?", tradeController.wantsThreePerson);
router.get("/wantFour?", tradeController.wantsFourPerson);
router.get("/wantFourMoney?", tradeController.wantsFourMoney);
router.get("/allFlats?", tradeController.getAllFlats);
router.get("/product/:id", tradeController.getObject);

export default router;