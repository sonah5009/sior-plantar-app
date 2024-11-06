from flask import Flask, request, jsonify, send_from_directory
from werkzeug.utils import secure_filename
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)
UPLOAD_FOLDER = './uploads'

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    print("Request for file:", filename)  # 파일 요청 로그 추가
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    if file:
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return jsonify({"message": "File successfully uploaded", "filename": filename}), 200
    else:
        return jsonify({"error": "Allowed file types are png, jpg, jpeg"}), 400

# if __name__ == '__main__':
#     app.run(debug=True, host='0.0.0.1', port=5000)

if __name__ == '__main__':
    app.run(debug=True, host='192.168.0.18', port=5000)