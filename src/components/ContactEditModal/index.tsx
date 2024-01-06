import React from 'react';
import { TextField, Button, Modal, Box } from '@mui/material';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import * as yup from 'yup';

import { useUpdateContactMutation } from 'store/contactsSlice';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  number: yup.string().required('Number is required'),
});

const ContactEditModal: React.FC<ModalProps> = ({ contact, onClose, open }) => {
  const [updateContact] = useUpdateContactMutation();
  if (!contact) {
    return null;
  }
  const handleSubmit = async (values: Contact, { setSubmitting }: FormikHelpers<Contact>) => {
    await updateContact({ contactId: contact.id, ...values });
    setSubmitting(false);
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyle}>
        <Formik initialValues={contact} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {({ isSubmitting }) => (
            <Form>
              <Field as={TextField} name="name" label="Name" fullWidth margin="normal" />
              <Field as={TextField} name="number" label="Number" fullWidth margin="normal" />
              <Button type="submit" variant="contained" disabled={isSubmitting}>
                Update
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default ContactEditModal;

type ModalProps = {
  onClose: () => void;
  open: boolean;
  contact?: Contact;
};

type Contact = {
  id: string;
  name: string;
  number: string;
};
