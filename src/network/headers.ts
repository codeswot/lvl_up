const getHeaders = (token: any) => {
  if (token) {
    return {
      'Front-Token': token,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  } else {
    return {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }
};

const getProfilePictureUploadHeaders = () => {
  return {
    'Content-Type': 'multipart/form-data',
    Accept: 'application/json',
  };
};

export { getHeaders, getProfilePictureUploadHeaders };
