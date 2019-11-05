# mds_qa_tests
 
-	Global du site :
   *	Longueur de la liste (1 page)  ok
   *	Pagination valide (500 news, 20/pages, 25 pages) Ok
   *	Ouverture des news dans un nouvel onglet (attribut blank) ok
   *	Catégorie des news (Top New Show Ask Jobs) ok
   *	Menu accessible partout (test boucle sur chaque page des catégories) ok
   *	Visibilité de la catégorie actuelle (test boucle sur chaque page des catégories) ok
   *	Enregistrement de la page dans l’url Ok
   *	Validité des news (titre source score user date commentaires) ok 
-	News
   *	Catégorie Show -> titre en Show HN Ok
   *	Catégorie Ask -> pas de lien externe, seulement commentaire Ok
   *	Présence d’un fil de commentaire Ok
-	Commentaires
   *	Sa propre page, avec le contenu de la news Ok
   *	nbr total de commentaires + chaque comm avec son auteur, lien vers son profil et ancienneté du commentaire Ok
   *	Peut être replié avec seulement le nombre de commentaire, ou tout afficher ok
-	Infra 
   *	Responsive Todo
   *	Auto refresh Todo
   *	https OK
   *	rapidité maximale Todo

   Difficultées rencontrés : 
   
   - Utiliser correctement les sélecteurs, par exemple lorsque cypress renvoie plusieurs éléments et que l'on veut travailler sur un seul en particulier
   - Nommage des tests
   - S'assurer de tester la bonne chose correctement
   - le test "url to user is valid" dans user.spec, avec le passage de la variable entre les 2 pages. Recours à une variable globale à ce test et aux Then
   - Décortiquer les spécification pour isoler les différents tests

   Tests manquants 
   - Responsive = J'ai trouvé comment réduire le viewport pour afficher le site en mode mobile. Les classes n'étant pas modifiées, il faudra sans doute sonder le css et les media queries
   - Vitesse de chargement - Aucune info trouvée dans la doc, pas de pistes pour ce test
   - Actualisation automatique - Peut être comparer la liste des titres avant/après, en regardant du côté des requêtes reçues depuis le serveur pour simuler un refresh
