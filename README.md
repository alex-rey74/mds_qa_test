# mds_qa_tests
 
-	Global du site :
  -	Longueur de la liste (1 page)  ok
  -	Pagination valide (500 news, 20/pages, 25 pages) Ok
  -	Ouverture des news dans un nouvel onglet (attribut blank) ok
  -	Catégorie des news (Top New Show Ask Jobs) ok
  -	Menu accessible partout (test boucle sur chaque page des catégories) ok
  -	Visibilité de la catégorie actuelle (test boucle sur chaque page des catégories) ok
  -	Enregistrement de la page dans l’url Ok
  -	Validité des news (titre source score user date commentaires) ok 
-	News
  -	Catégorie Show -> titre en Show HN Ok
  -	Catégorie Ask -> pas de lien externe, seulement commentaire Ok
  -	Présence d’un fil de commentaire
-	Commentaires
  -	Sa propre page, avec le contenu de la news Ok
  -	nbr total de commentaires + chaque comm avec son auteur, lien vers son profil et ancienneté du commentaire Ok
  -	Peut être replié avec seulement le nombre de commentaire, ou tout afficher ok
-	Infra 
  -	Responsive
  -	Auto refresh
  -	https OK
  -	rapidité maximale

