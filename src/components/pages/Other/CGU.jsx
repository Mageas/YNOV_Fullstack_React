import { Typography } from '../../atoms'

const CGU = ({pages, ...props}) => {

  return (
    <>
      <Typography.Title>
        Ma petite page de CGU
      </Typography.Title>
      <Typography.Paragraphe>
      Bienvenue sur Le Blog de Patrick ! Avant de plonger dans mes articles, merci de prendre un petit moment pour lire ces Conditions Générales d'Utilisation (CGU). Elles sont là pour que tout se passe au mieux entre toi, lecteur, et moi, Patrick, l'auteur de ce blog.
      </Typography.Paragraphe>

      <Typography.Subtitle>1. Qui suis-je et quel est l'objet de ces CGU ?</Typography.Subtitle>

      <Typography.Paragraphe>
      Éditeur du Blog : Patrick [Ajoute ton nom de famille si tu le souhaites]
      </Typography.Paragraphe>
      <Typography.Paragraphe>
      Nom du Blog : Le Blog de Patrick
      </Typography.Paragraphe>
      <Typography.Paragraphe>
      Adresse du Blog : [Mets ici l'URL de ton blog, ex : www.leblogdepatrick.fr]
      </Typography.Paragraphe>
      <Typography.Paragraphe>
      Contact : [Mets ici ton adresse e-mail de contact]
      </Typography.Paragraphe>

      <Typography.Paragraphe>
      Ces CGU ont pour but de définir les règles d'utilisation de mon blog par ses visiteurs. En naviguant sur ce blog, tu acceptes ces conditions. Si tu n'es pas d'accord avec, eh bien, je serai triste, mais il vaudra mieux ne pas l'utiliser.
      </Typography.Paragraphe>

      <Typography.Subtitle>2. Accès au Blog</Typography.Subtitle>

      <Typography.Paragraphe>
      Mon blog est accessible gratuitement à toute personne disposant d'un accès à Internet. Je fais de mon mieux pour qu'il soit disponible 24h/24 et 7j/7. Cependant, comme tout site web, il peut y avoir des interruptions (pour maintenance, mises à jour, ou des soucis techniques imprévus – les joies du web !). Je ne pourrai pas être tenu pour responsable si le blog est temporairement inaccessible.
      </Typography.Paragraphe>

      <Typography.Subtitle>3. Propriété Intellectuelle</Typography.Subtitle>

      <Typography.Paragraphe>
      Sauf mention contraire, tout le contenu que tu vois sur ce blog (textes, images, vidéos, logos, etc.) est ma création et m'appartient. C'est le fruit de mon travail et de ma passion !
      </Typography.Paragraphe>

      <Typography.Paragraphe>
      Ce que tu peux faire : Lire, partager les liens vers mes articles sur les réseaux sociaux (ça me fait super plaisir !), et t'inspirer.
      </Typography.Paragraphe>
      <Typography.Paragraphe>
      Ce que tu ne peux pas faire (sans ma permission écrite) : Copier, reproduire, modifier ou distribuer mon contenu. Un peu comme si tu prenais mes notes personnelles sans me demander.

      </Typography.Paragraphe>
      <Typography.Paragraphe>
      Petite note pour toi, développeur : Si je partage des bouts de code, ils sont souvent là pour illustrer un propos ou t'aider. Vérifie toujours les licences associées si tu souhaites les réutiliser dans tes propres projets.
      </Typography.Paragraphe>

      <Typography.Subtitle>4. Tes Commentaires : Espace de Liberté (et de Respect)</Typography.Subtitle>

      <Typography.Paragraphe>
      J'adore lire tes commentaires et échanger avec toi ! C'est ce qui rend un blog vivant. Cependant, pour que cet espace reste agréable pour tous :
      </Typography.Paragraphe>

      <Typography.Paragraphe>
      Sois courtois et respectueux : Pas d'insultes, de propos haineux, racistes, diffamatoires, ou illégaux.
      </Typography.Paragraphe>
      <Typography.Paragraphe>
      Pas de spam ni de pub : Les commentaires sont faits pour discuter du contenu des articles.
      </Typography.Paragraphe>
      <Typography.Paragraphe>
      Tu es responsable : Les propos que tu tiens dans tes commentaires n'engagent que toi.
      </Typography.Paragraphe>

      <Typography.Paragraphe>
      Je me réserve le droit de modérer ou supprimer tout commentaire qui ne respecterait pas ces règles simples, sans avoir à me justifier.
      </Typography.Paragraphe>

      <Typography.Subtitle>5. Ma Responsabilité (et ses limites)</Typography.Subtitle>

      <Typography.Paragraphe>
      Je m'efforce de partager des informations exactes et à jour. Toutefois, je suis humain et des erreurs ou omissions peuvent se glisser dans mes articles. Le contenu de ce blog est fourni à titre informatif et ne constitue en aucun cas un conseil professionnel (financier, médical, juridique, etc.).
      </Typography.Paragraphe>

      <Typography.Paragraphe>
      Je ne pourrai donc pas être tenu responsable des dommages directs ou indirects que tu pourrais subir suite à l'utilisation des informations présentes sur le blog.
      </Typography.Paragraphe>

      <Typography.Subtitle>6. Liens vers d'autres sites</Typography.Subtitle>

      <Typography.Paragraphe>
      Mon blog peut contenir des liens vers d'autres sites web. C'est souvent pour te donner des sources complémentaires ou te faire découvrir des choses intéressantes. Cependant, je ne contrôle pas le contenu de ces sites externes et ne suis donc pas responsable de ce que tu y trouves. Cliquer sur ces liens est à tes propres risques.
      </Typography.Paragraphe>

      <Typography.Subtitle>7. Données Personnelles</Typography.Subtitle>

      <Typography.Paragraphe>
      Ta vie privée est importante. Pour savoir comment je collecte et gère tes données personnelles (par exemple, via les cookies ou si tu t'abonnes à une newsletter), je t'invite à consulter ma **Politique de Confidentialité** [Crée une page séparée pour cela et mets le lien ici]. En gros, je collecte le strict minimum pour que le blog fonctionne et pour comprendre quels sujets t'intéressent.
      </Typography.Paragraphe>

      <Typography.Subtitle>8. Modification des CGU</Typography.Subtitle>

      <Typography.Paragraphe>
      Le web évolue, mon blog aussi ! Je peux donc être amené à modifier ces CGU de temps en temps. Si c'est le cas, la nouvelle version sera publiée sur cette page, avec la date de mise à jour. Je t'invite à les consulter régulièrement.
      </Typography.Paragraphe>

      <Typography.Subtitle>9. Un souci ? Parlons-en !</Typography.Subtitle>

      <Typography.Paragraphe>
      Ces CGU sont soumises au droit français. En cas de litige, essayons d'abord de trouver une solution à l'amiable. Un bon dialogue résout souvent bien des problèmes ! Si vraiment on n'y arrive pas, les tribunaux français seront compétents.
      </Typography.Paragraphe>
    </>
  )
}

export default CGU