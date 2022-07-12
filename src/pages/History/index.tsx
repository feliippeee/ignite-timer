import { HistoryList, HistoyContainer, Status } from "./styles";

export function History() {
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
                  <tr>
                    <td>Tarefas</td>
                    <td>20 minutos</td>
                    <td>Há 2 meses</td>
                    <td>
                      <Status statusColor="green">Concluído</Status>
                    </td>
                  </tr>
                  <tr>
                    <td>Tarefas</td>
                    <td>20 minutos</td>
                    <td>Há 2 meses</td>
                    <td>
                      <Status statusColor="yellow">Em andamento</Status>
                    </td>
                  </tr>
                  <tr>
                    <td>Tarefas</td>
                    <td>20 minutos</td>
                    <td>Há 2 meses</td>
                    <td>
                      <Status statusColor="red">Interrompido</Status>
                    </td>
                  </tr>
                  <tr>
                    <td>Tarefas</td>
                    <td>20 minutos</td>
                    <td>Há 2 meses</td>
                    <td>
                      <Status statusColor="green">Concluído</Status>
                    </td>
                  </tr>
                  <tr>
                    <td>Tarefas</td>
                    <td>20 minutos</td>
                    <td>Há 2 meses</td>
                    <td>
                      <Status statusColor="red">Interrompido</Status>
                    </td>
                  </tr>
                  <tr>
                    <td>Tarefas</td>
                    <td>20 minutos</td>
                    <td>Há 2 meses</td>
                    <td>
                      <Status statusColor="yellow">Em andamento</Status>
                    </td>
                  </tr>
                </tbody>
              </table>
            </HistoryList>
        </HistoyContainer>
    )
}