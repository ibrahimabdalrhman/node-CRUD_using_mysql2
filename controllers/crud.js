const connection = require("../database");


exports.getData = async (req, res) => {

  try {
    const [rows] = await connection.query(`SELECT * FROM notes`);
    res.send(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.insertData = async (req, res) => {
  try {
    const { title, content } = req.body;

    const data = await connection.query(
      `
      INSERT INTO notes (title, content)
      VALUES (?, ?)
      `,
      [title, content]
    );

    res.send("data added successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await connection.query(
      `
      SELECT * FROM notes
      WHERE id=${id};
      `);
    if (rows.length==0) {
      return res.status(400).send("this id is not valid");
      }
    res.send(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.updateOne = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, content } = req.body;

    const data = await connection.query(
      `
      UPDATE notes
      SET title=? , content = ?
      WHERE id=${id};
      `, [title, content]);
    
    res.send("update data successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const id = req.params.id;
    const [rows] = await connection.query(
      `
      DELETE FROM notes
      WHERE id=${id};
      `
    );
    res.send("delete one row");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

