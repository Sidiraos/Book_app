const firstLetterUppercase = (chaine) => {
    if (!chaine) return chaine;
  
    return chaine.charAt(0).toUpperCase() + chaine.slice(1);
  }

  export default firstLetterUppercase;