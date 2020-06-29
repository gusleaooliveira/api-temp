const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient, ObjectId } = require("mongodb");
const router = express.Router();

const url = "mongodb+srv://gusleaooliveira:<password>@cluster0.twwyw.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority";
const banco = "api_mrconstrucoes";
const collection = "depoimentos";

const cliente = new MongoClient(url, {useNewUrlParser: true});

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
router.use(bodyParser.raw());
router.use(cors());

router.use((req, res, next) => {
	let data = new Date();
	console.log("==============================================");
	console.log("Log:",data.getDate()+"/"+data.getMonth()+"/"+data.getYear(),data.getHours()+":"+data.getMinutes());
	next();
});

router.get("/depoimentos", (req, res, next) => {
	async function executar(){
		try {
			await cliente.connect();
			let db = cliente.db(banco);
			let colecao = db.collection(collection);
			let resposta = await colecao.find({}).toArray();
			console.log("Resposta:",resposta);
			console.log("==============================================");
			res.status(200).send(resposta);
		}
		catch(erro){
			console.error("Erro:",erro.stack);
		}
	}
	executar();
});

router.get("/depoimentos/:id", (req, res, next) => {
	async function executar(){
		try {
			await cliente.connect();
			let db = cliente.db(banco);
			let colecao = db.collection(collection);
			let resposta = await colecao.find({ _id: ObjectId(String(req.params.id)) }).toArray();
			console.log("Resposta:",resposta);
			console.log("==============================================");
			res.status(200).send(resposta);
		}
		catch(erro){
			console.error("Erro:",erro.stack);
		}
	}
	executar();
});

router.post("/depoimentos", (req, res, next) => {
	let corpo = req.body;
	console.log(corpo);
	async function executar(){
		try {
			await cliente.connect();
			let db = cliente.db(banco);
			let colecao = db.collection(collection);
			let resposta = await colecao.insertOne(corpo);
			console.log("==============================================");
			res.sendStatus(200);
		}
		catch(erro){
			console.error("Erro:",erro.stack);
		}
	}
	executar();
});

router.put("/depoimentos", (req, res, next) => {
	async function executar(){
		try {
			await cliente.connect();
			let db = cliente.db(banco);
			let colecao = db.collection(collection);
			let resposta = await colecao.findOneAndReplace(
				{ _id : ObjectId(String(req.body["query"]._id)) },
				req.body["update"]
			);
			console.log("==============================================");
			res.sendStatus(200);
		}
		catch(erro){
			console.error("Erro:",erro.stack);
		}
	}
	executar();
});

router.delete("/depoimentos/:id", (req, res, next) => {
	async function executar(){
		try {
			await cliente.connect();
			let db = cliente.db(banco);
			let colecao = db.collection(collection);
			let resposta = await colecao.findOneAndDelete({ _id: ObjectId(String(req.params.id)) });
			console.log("==============================================");
			res.sendStatus(200);
		}
		catch(erro){
			console.error("Erro:",erro.stack);
		}
	}
	executar();
});

module.exports = router;
