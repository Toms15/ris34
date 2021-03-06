<?php
$cfg['debug'] = false;

// This is the email address where you will receive the notification message
$cfg['email_address'] = 'ristorante34@yahoo.it';

$cfg['email_from'] = '';

// The recipients in CC and BCC will receive a copy of the data collected in the form
// Use commas to separate mutiple e-mail addresses (no spaces allowed)
// Example: youraddress1@yourdomain.com,youraddress2@yourdomain.com
$cfg['email_address_cc'] = '';

$cfg['email_address_bcc'] = '';

$cfg['emailsendingmethod'] = 'php';

$cfg['smtp_host'] = '';

$cfg['smtp_port'] = '';

$cfg['smtp_encryption'] = '';

$cfg['smtp_username'] = '';

$cfg['smtp_password'] = '';

$cfg['timezone'] = 'UTC';

$cfg['form_id'] = '';

$cfg['form_name'] = 'Ristorante 34 - Ita';

$cfg['form_validationmessage'] = 'Grazie! Il messaggio è stato inviato correttamente.<br />Ti risponderemo il prima possibile.';

$cfg['form_errormessage_captcha'] = 'Captcha non corretto';

$cfg['form_errormessage_emptyfield'] = 'Compila il campo richiesto';

$cfg['form_errormessage_invalidemailaddress'] = 'Indirizzo e-mail non valido';

$cfg['form_errormessage_invalidurl'] = '';

$cfg['form_errormessage_terms'] = '';

$cfg['form_redirecturl'] = '';

$cfg['adminnotification_subject'] = 'Nuovo messaggio dal form del sito Ristorante al 34';

$cfg['adminnotification_hideemptyvalues'] = false;

$cfg['adminnotification_hideformurl'] = true;

$cfg['usernotification_inputid'] = 'cfgen-element-5-3';

$cfg['usernotification_activate'] = false;

$cfg['usernotification_insertformdata'] = false;

$cfg['usernotification_format'] = '';

$cfg['usernotification_subject'] = '';

$cfg['usernotification_message'] = '';

$cfg['usernotification_hideemptyvalues'] = false;

$cfg['formvalidation_required'] = array('cfgen-element-5-6','cfgen-element-5-3','cfgen-element-5-8');

$cfg['formvalidation_email'] = array('cfgen-element-5-3');

?>