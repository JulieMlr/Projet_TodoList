# Projet_TodoList

# Lancement du projet 
- git clone https://github.com/JulieMlr/Projet_TodoList.git
- cd Projet_TodoList
- expo start

# Fichier App
Crée la navigation de l'application
- AllScreen : Fait appel au fichier All pour afficher toutes les listes
- DoneScreen : Fait appel au fichier DoneScreen pour afficher la liste des tâches en terminés (je n'ai pas réussi à récupérer les éléments du state donc c'est en commentaire)
- TodoScreen : Fait appel au fichier TodoScreen pour afficher la liste des tâches en cours (comme pour DoneScreen je n'ai pas réussi a récupérer les éléments du state pour les afficher)

# Fichier All
Ce fichier est la page All de mon application, elle permet l'affichage de toutes les listes (terminés ou non)

## Explication
Création de mon state avec tout les éléments dont j'ai besoin pour l'application
- storeData & getData : permet le stockage dans AsyncStorage (je n'ai pas réussi à l'utiliser dans mon application, donc ça ne fonctionne pas)
- ListItem : permet l'affichage des listes qui sont en cours
- ListValidItem : permet l'affichage des listes qui sont terminés
- deleteItem : permet la suppression d'une tâche qui est en cours
- deleteValidItem : permet la suppression d'une tâche qui est terminée
- addItem : permet l'ajoute de la tâche et de sa description
- ValidItem : permet de mettre à Done une tâche
- Done : permet le parcours de la liste des tâches terminés
- Todo : permet le parcours de la liste des tâches en cours
- Bouton : permet l'affichage des zones de texte et du bouton

# Fichier DoneScreen
Ce fichier est la page Done de mon application, elle permet l'affichage des listes qui sont terminés

## Explication
Récupère la liste des tâches terminés du state
- ListValidItem : permet l'affichage des listes qui sont terminés
- Done : permet le parcours de la liste des tâches terminés

# Fichier TodoScreen
Ce fichier est la page Todo de mon application, elle permet l'affichage des listes qui sont en cours

## Explication
Récupère la liste des tâches en cours du state
- ListItem : permet l'affichage des listes qui sont en cours
- Todo : permet le parcours de la liste des tâches en cours

