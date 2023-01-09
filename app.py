from flask import Flask, render_template, request, jsonify, make_response
from dbsetup import create_connection, select_all_items, update_item
from flask_cors import CORS, cross_origin
from pusher import Pusher
import simplejson

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
pusher = Pusher(app_id=u'1513885', key=u'f38822c373812da34684', secret=u'1ecd687c65e087b43ba3', cluster=u'ap3')
database = "./pythonsqlite.db"
conn = create_connection(database)
c = conn.cursor()

def main():
	global conn, c

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/admin')
def admin():
	return render_template('admin.html')

@app.route('/vote', methods=['POST'])
def vote():
	data = simplejson.loads(request.data)
	#update_item(c, [data['member']])
	#output = select_all_items(c, [data['member']])
	pusher.trigger(u'poll', u'vote', data)
	return request.data

if __name__ == '__main__':
	main()
	app.run(debug=True)