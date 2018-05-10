using UnityEngine;
using System.Collections;
using UnityEngine.UI;
using System.Collections.Generic;
using UnityEngine.SceneManagement;

public class Timer : MonoBehaviour {
	public GameObject CameraGameOver;
	public GameObject MainCamera;
	public bool Mostrar;
	public string level;
	public Rect windowRect;
	public Rect windowRect1;
	public GUISkin  desing;
	private GameObject fondo;


	public Text tiempoText;
	public float tiempo=0.0f;

	void Start () {

		fondo = GameObject.Find("fondoNivel1");


	}
	void func(int a){
		if (GUILayout.Button ("Reiniciar")) {

			Mostrar = false;
			Time.timeScale = 1f;
			//int SceneId= SceneManager.GetActiveScene ();
			//Destroy(gameObject);
			SceneManager.LoadScene("Level0");

			//Application.LoadLevel("Application.loadlevel");





		}

		if (GUILayout.Button ("Siguiente nivel")) {

			Mostrar = false;
			Time.timeScale = 1f;
			SceneManager.LoadScene("Animacion");
			SceneManager.LoadScene("level1");



		}
		if (GUILayout.Button ("Salir")) {

			Mostrar = false;
			Time.timeScale = 1f;
			SceneManager.LoadScene("menuInicial");


		}

	}
	void OnGUI()
	{


		GameObject.Find("Text").GetComponent<UnityEngine.UI.Text>().text = ""+tiempo;
	
		if (Mostrar) {

			windowRect = new Rect (Screen.width / 2 - 160, Screen.height / 2 - 160, 300, 300);
			windowRect = GUI.Window(0,windowRect,func,"PERDISTE \n");


		}
	}
	public void Update(){
		
		if (tiempo <= 0) {
			Mostrar = true;
			//Time.timeScale = 0f;
			//CameraGameOver.SetActive (true);
			//MainCamera.SetActive (false);
		} else {
			tiempo -= Time.deltaTime;
			tiempoText.text = "" + tiempo.ToString("f0");
		}
	}
}