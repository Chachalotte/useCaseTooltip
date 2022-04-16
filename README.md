# useCaseTooltip
Usecase tooltip pour Unkle

# Démarches du projet 

Le projet a été initialisé sous la version 13 d'Angular, qui utilise le langage TypeScript.

J'ai choisi ce framework, car celui-ci est similaire à React grâce à sa structure et le système de composants. 

J'ai décidé de réaliser 4 useCase différents pour répondre au besoin du tooltip et améliorer l'interface utilisateur : 

- Hover d'une image
- Appui sur un bouton
- Hover d'une icone
- Focus sur un input

En ce qui concerne ma démarche pour faire les fonctionnalités, je me suis posé et me suis demander :

- Comment adapter le message du tooltip selon le scénario ? Je me suis penché sur la question en le modifiant à chaque appel
- La position du composant est proche de l'élément au survol / clic
- Pour les 4 useCases, j'envoie au composant enfant l'action utilisé pour l'adapter selon le scénario si besoin pour une idée d'amélioration de la fonctionnalité
- Pour les animations, j'ai utilisé le module d'animation d'Angular à l'appel d'un composant enfant pour animer les tooltips

# Comment lancer le projet ?

- Cloner le repo
- Taper « npm i » pour installer les dépendances du projet
- Lancer le projet avec la commmande « npm start »
