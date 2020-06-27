<?php
defined('BASEPATH') or exit('No direct script access allowed');

require APPPATH . 'libraries/REST_Controller.php';

use Restserver\Libraries\REST_Controller;


header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    //header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Content-Type');
    exit;
}

class Video extends REST_Controller
{

    function __construct()
    {
        parent::__construct();
        $this->load->database();
    }
    public function index_get($id = 0)
    {
        if (!empty($id)) {
            $data = $this->db->get_where("videos", ['id' => $id])->row_array();
        } else {
            $data = $this->db->get("videos")->result();
        }

        $this->response($data, REST_Controller::HTTP_OK);
    }


    function index_post()
    {
        if ($this->input->method()) {
            if (!$_FILES) {
                $this->response('selest file', 500);
                return;
            }
            $upload_path = './uploads/';
            $config['upload_path'] = $upload_path;
            $config['allowed_types'] = 'mp4';
            $config['max_size'] = '0';
            $config['max_filename'] = '255';
            $config['encrypt_name'] = true;
            $config['orig_name'] = $_FILES['file']['name'];


            $this->load->library('upload', $config);

            if (file_exists($upload_path . $_FILES['file']['name'])) {
                $this->response('File already exists => ' . $upload_path . $_FILES['file']['name']);
                return;
            } else {
                if (!file_exists($upload_path)) {
                    mkdir($upload_path, 0777, true);
                }

                if ($this->upload->do_upload('file')) {
                    $fileName = $this->upload->data('file_name');
                    $data = [
                        'name' => $this->upload->data('orig_name'),
                        'src' => $fileName
                    ];
                    $this->db->insert('videos', $data);
                    $this->set_response(['message' => 'File successfully uploaded', 'data' => $data], REST_Controller::HTTP_OK);
                    return;
                } else {
                    $this->response('Error during file upload => ' . $this->upload->display_errors('', ''), REST_Controller::HTTP_INTERNAL_SERVER_ERROR);
                    return;
                }
            }
        }
    }
}
