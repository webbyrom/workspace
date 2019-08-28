<?php 

	$auteur = $_POST['auteur'];
	$commentaire = $_POST['commentaire'];
	$idid = $_GET['billet'];

	try {

		$bdd = new PDO('mysql:host=127.0.0.1:3308;dbname=blog;charset=utf8', 'root', '123');
	}

	catch(Exception $e) {

	    die('Erreur : '.$e->getMessage());
	}


	$req = $bdd->prepare('INSERT INTO commentaires(auteur, id_billet, commentaire, date_commentaire ) VALUES(:auteur, :id_billet, :commentaire, NOW() )');

	$req->execute(array(

	    'auteur' => $auteur,

	    'commentaire' => $commentaire,

	    'id_billet' => $idid

	    ));


			header('Location: commentaires.php?billet=' . $idid);



?>		

