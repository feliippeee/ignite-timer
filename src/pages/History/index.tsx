import { useContext } from "react";
import { formatDistanceToNow} from 'date-fns';
import ptBR from "date-fns/locale/pt-BR";
import { CyclesContext } from "../../contexts/CyclesContext";
import { HistoryList, HistoyContainer, Status } from "./styles";

export function History() {
  const { cycles } = useContext(CyclesContext)
    return (
        <HistoyContainer>
            <h1>Meu histórico</h1>

            <HistoryList>
              <table>
                <thead>
                  <tr>
                    <th>Tarefa</th>
                    <th>Duração</th>
                    <th>Início</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                 {cycles.map(cycles => {
                  return (
                    <tr key={cycles.id}>
                    <td>{cycles.task}</td>
                    <td>{cycles.minutesAmount}</td>
                    <td>{formatDistanceToNow(cycles.startDate, {
                      addSuffix: true,
                      locale: ptBR,

                    })}</td>
                    <td>
                      { cycles.finishedDate && <Status statusColor="green">Concluído</Status>}
                      { cycles.interruptedDate && <Status statusColor="red">Interrompido</Status>}
                      {(!cycles.finishedDate && !cycles.interruptedDate) && ( 
                        <Status statusColor="yellow">Em andamento</Status>
                      )}
                    </td>
                  </tr>
                  )
                 })}
                 
                </tbody>
              </table>
            </HistoryList>
        </HistoyContainer>
    )
}