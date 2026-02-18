import { useState } from 'react';
import type { FormEvent, ChangeEvent } from 'react';
import type { EnergyLevel, Mood } from '../types';

import styles from "./CheckInForm.module.css"

const moods: Mood[] = ['great', 'good', 'okay', 'tired', 'stressed'];

export default function CheckInForm() {

  const [name, setName] = useState('');
  const [mood, setMood] = useState<Mood | ''>('');
  const [energy, setEnergy] = useState<EnergyLevel>(3);
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name || !mood) {
      setError('Namn och humör måste fyllas i.');
      return;
    }
    setError('');

    setName('');
    setMood('');
    setEnergy(3);
    setComment('');
  }

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  console.log(name);

  function handleMoodChange(e: ChangeEvent<HTMLSelectElement>) {
    setMood(e.target.value as Mood);
  }

  function handleEnergyChange(e: ChangeEvent<HTMLInputElement>) {
    setEnergy(Number(e.target.value) as EnergyLevel);
  }

  function handleCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setComment(e.target.value);
  }

  return (
    <>
        <h2>Daglig check-in</h2>
        <form className={styles.card} onSubmit={handleSubmit}>
      <label className={styles.field}>
        <span>Namn</span>
        <input type="text" value={name} onChange={handleNameChange} />
      </label>

      <label className={styles.field}>
        <span>Humör</span>
        <select value={mood} onChange={handleMoodChange}>
          <option value="">Välj humör...</option>
          {moods.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span>Energilevel: {energy}</span>
        <input type="range" min={1} max={5} value={energy} onChange={handleEnergyChange} />
      </label>

      <label className={styles.field}>
        <span>Kommentar (valfri)</span>
        <textarea value={comment} onChange={handleCommentChange} rows={3} />
      </label>

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit">Check-in</button>
    </form>
    </>
      
  );
}
