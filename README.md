# Projet_TodoList

# Lancement du projet 
- git clone git@github.com:JulieMlr/Projet_TodoList.git --branch master --single-branch
- cd Projet_TodoList
- npm add expo
- expo start


# Fichier App
Crée la navigation de l'application
- AllScreen : Fait appel au fichier All pour afficher toutes les listes
- import DoneScreen & TodoScreen :
    - DoneScreen : Permet l'affichage des tâches qui sont terminées 
    - TodoScreen : Permet l'affichage des tâches qui sont en cours


# Fichier All
Ce fichier est la page All de mon application, elle permet l'affichage de toutes les listes (terminés ou non)
### Explication
Création de mon state avec tout les éléments dont j'ai besoin pour l'application
- componentDidMount : Permet de récupérer les listes stockés dans le AsyncStorage au début de l'application
- addItem : Permet l'ajout de la tâche et de sa description
- Done : Permet le parcours de la liste des tâches terminés et fait appel à ListValidItem pour l'affichage
- Todo : Permet le parcours de la liste des tâches en cours et fait appel à ListItem pour l'affichage
- Bouton : Permet l'affichage des zones de texte et du bouton et fait appel à addItem pour l'ajout


# Fichier DoneScreen
Ce fichier est la page Done de mon application, elle permet l'affichage des tâches terminées
### Explication
Récupère la liste des tâches terminés grâce au getData
- Parcours la liste des tâches terminés et fait appel à ListValidItem pour l'affichage de la liste
### Explication des commentaires
Je voulais permettre de supprimer et de rendre une tâche Todo sur la page Done, malheureusement je n'ai pas réussi a faire fonctionner ses fonctionnalités, donc je les ai mis en commentaires pour vous montrer ce que j'ai essayé de faire


# Fichier TodoScreen
Ce fichier est la page Todo de mon application, elle permet l'affichage des tâches qui sont en cours
### Explication
Récupère les listes des tâches en cours et terminées grâce au getData
- Parcours la liste des tâches en cours et fait appel à ListItem pour l'affichage de la liste
### Explication des commentaires
Je voulais permettre de supprimer et de rendre une tâche Done sur la page Todo, malheureusement je n'ai pas réussi a faire fonctionner ses fonctionnalités, donc je les ai mis en commentaires pour vous montrer ce que j'ai essayé de faire


# ListItem
Ce fichier contient les fonctions qui permettent l'affichage des listes dans mon application
### Explication
- ListItem : Permet la suppression d'une tâche en cours, permet de valider une tâche et permet l'affichage des tâches en cours dans la page All de mon application
- ListValidItem : Permet la suppression d'une tâche terminée et permet l'affichage des tâches terminées dans la page All de mon application

# Storage
Ce fichier contient les fonctions qui gère le AsyncStorage
### Explication
- storeData : Permet de sauvegarder une tâches dans le AsyncStorage (elle est appellé lors de l'ajout d'une tâche)
- getData : Permet de récupérer les tâches qui ont été sauvegardés

