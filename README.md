<!DOCTYPE >
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>INFO_HUB</title>
    <link rel="icon" href="info.jpg">
    <script src="info_con.js"></script>
    <style>
        body {
            background-image: url('info.gif');
            background-size: cover;
            font-family: 'Arial', sans-serif;
            color: #fff;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.85);
            background-blend-mode: darken;
        }

        header {
            margin-bottom: 20px;
        }

        h1 {
            color: #00d4ff;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
            font-size: 2.5rem;
            margin: 0;
        }

        section {
            text-align: center;
            font-size: 1.2rem;
            max-width: 800px;
            margin-bottom: 20px;
        }

        article {
            background: rgba(30, 30, 30, 0.9);
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
            width: 100%;
            max-width: 500px;
        }

        fieldset {
            border: none;
            margin: 0;
            padding: 0;
        }

        h2 {
            color: #00d4ff;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
            font-size: 1.8rem;
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 10px;
            font-size: 1rem;
            color: #ccc;
        }

        input[type="text"], input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #555;
            border-radius: 5px;
            background-color: #333;
            color: #fff;
            box-sizing: border-box;
            font-size: 1rem;
            transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        input[type="text"]:focus, input[type="password"]:focus {
            background-color: #444;
            border-color: #00d4ff;
            outline: none;
        }

        input[type="submit"] {
            background: linear-gradient(45deg, #00d4ff, #007BFF);
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1rem;
            transition: background 0.3s ease;
            width: 100%;
            box-sizing: border-box;
        }

        input[type="submit"]:hover {
            background: linear-gradient(45deg, #007BFF, #00d4ff);
        }
    </style>
</head>
<body>
    <header>
        <h1>INFO_HUB</h1>
    </header>
    <section>
        <p>In today's fast-paced world, keeping track of important information can be challenging.</p>
        <p>INFO_HUB is a revolutionary website designed to help you store and organize all the crucial details you need to remember.</p>
        <p>this website is created by el ostoura darhi darhewi </p>
    </section>
    <article align="center">
        <form action="info.php" method="post" onsubmit="controle()">
            <fieldset>
                <h2>Save Your Information</h2>
                <label for="p">Password</label>
                <input type="password" name="p" id="p">
                <label for="u">User Name</label>
                <input type="text" name="u" id="u">
                <label for="pf">Platform Name</label>
                <input type="text" name="pf" id="pf">
                <input type="submit" value="Save" ><br><br>
                
            </fieldset>
        </form>
    </article>
</body>
</html>
