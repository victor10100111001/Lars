from yt_dlp import YoutubeDL
from flask import Flask, request, render_template, url_for
from flask import send_file

app = Flask(__name__)

@app.route('/download')
def download():
    # print("test")
    # if request.method == "POST":
    #     URL = request.form.get("url")
    #     print(URL)
    URLS = ['https://www.youtube.com/watch?v=BaW_jenozKc']
    with YoutubeDL() as ydl:
        ydl.download(URLS)
    return render_template('music.html')
    
        

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/music')
def music():
    return render_template('music.html')

@app.route('/about')
def about():
    return render_template('about.html')

if __name__ == '__main__':
   app.run(debug=False)
    