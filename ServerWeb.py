from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)

app.secret_key = "holamama67pcpcpcpcpcpcpsaojdsafaasdgewsa}oñrg{a4t3w786435pvdsgfdsesgfg23r9ufsñekldsf{pjlgdfsñ{gnj}}"

@app.route("/")
def iniciar():
    return render_template("index.html")

@app.route("/procesar_request", methods=['POST'])
def procesar():
    print(request.form)
    session["nombre"] = request.form["nombre_completo"]
    session["email"] = request.form["email"]
    session["password"] = request.form["password"]
    return redirect("/mostrar_informacion")

@app.route("/mostrar_informacion")
def mostrar():
    return render_template("informacion.html", nombre=session["nombre"], email=session["email"], password=session["password"])


if __name__ == "__main__":
    app.run(debug=True)