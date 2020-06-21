const { MongoClient, ObjectId } = require("mongodb");

const collections = [ "depoimento", "imagem" ];
const cliente = new MongoClient(url);

async function inserir(res, dados, col){
	try {	
		await cliente.connect();
		const db = cliente.db(banco);
		const collection = db.collection(collections[col]);
		const resposta = await collection.insertOne(dados);
		res.sendStatus(200);
	}
	catch(erro){
		console.error("Erro:"+erro.stack);
		return false;
	}
}

async function listarTodos(res, col){
	try {
		await cliente.connect();
		const db = cliente.db(banco);
		const collection = db.collection(collections[col]);
		const resposta = await collection.find({}).toArray();
		res.send(resposta);
	}
	catch(erro){
		console.error("Erro:"+erro.stack);
		return false;
	}
}


module.exports = {
	inserir,
	listarTodos
};